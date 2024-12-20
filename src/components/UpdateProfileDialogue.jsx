import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const UpdateProfileDialogue = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    bio: user?.profile?.bio || '', // Empty if undefined
    skills: user?.profile?.skills?.join(', ') || '', // Convert array to comma-separated string or empty if undefined
    file: null // Initially null
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];

    setInput({
      ...input,
      file: file
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.fullname || !input.email || !input.phoneNumber) {
      toast.error("Name, Email, and Phone number are required");
      return;
    }

    const formData = new FormData();
    formData.append('fullname', input.fullname);
    formData.append('email', input.email);
    formData.append('phoneNumber', input.phoneNumber);
    formData.append('bio', input.bio.trim() === "" ? "" : input.bio); // Set to empty string if bio is empty
    formData.append('skills', input.skills || ""); // Empty string if undefined




    // Append resume if updated
    if (input.file) {
      formData.append('file', input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        console.log('Updated user:', res.data.user); 
        toast.success('Profile updated successfully');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent className='sm:max-w-[425px]' onInteractOutside={() => setOpen(false)} aria-describedby="update-profile-description">
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
            <DialogDescription id="update-profile-description">Fill in the form below to update your profile details.</DialogDescription>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className='grid gap-4 py-4'>

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input
                  id="name"
                  name="fullname"
                  type='text'
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className='col-span-3'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type='email'
                  value={input.email}
                  onChange={changeEventHandler}
                  className='col-span-3'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="number" className="text-right">Number</Label>
                <Input
                  id="number"
                  name="phoneNumber"
                  type="tel"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className='col-span-3'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="bio" className="text-right">Bio</Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className='col-span-3'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="skills" className="text-right">Skills</Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className='col-span-3'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="file" className="text-right">Resume</Label>
                <Input
                  id="file"
                  name="file"
                  type='file'
                  onChange={fileChangeHandler}
                  accept="application/pdf"

                  className='col-span-3'
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={loading} className='bg-red-600 text-white'>
                {loading ? 'Updating...' : 'Update'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialogue;
