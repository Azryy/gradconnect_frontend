import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
  {
    filterType:"Location",
    array:["Manila","Batangas","Laguna","Cavite","Pampanga"]
  },
  {
    filterType:"Department",
    array:["CTE","CAS","CICS","CABEIHM","CET"]
  },
  {
    filterType:"Salary",
    array:["0-30k","30-60k","60-90k","90k-120k","120k-150k"]
  }
]

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value)
  }
  useEffect(()=>{
    dispatch(setSearchedQuery(selectedValue));
    
  },[selectedValue])
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-2xl'>Filter Jobs</h1>
      <hr className='mt-2'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
          filterData.map((data,index)=>(
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item,index,idx)=>{
                  const itemId = `r${index}-${idx}` 
                  return(
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} id={itemId} className='text-red-500'/>
                      <Label htmlFor={itemId}>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
