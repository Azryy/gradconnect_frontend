import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>
            Recent applied Jobs
        </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className='text-right'>Status</TableHead>

            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2,3,4].map((item,index)=>(
                    <TableRow key={index}>
                        <TableCell>  11/01/2024 </TableCell>
                        <TableCell>  Backend Developer </TableCell>
                        <TableCell>  Google </TableCell>
                        <TableCell className='text-right'>  <Badge>Accepted</Badge> </TableCell>
                    </TableRow>
                ))
            }
            
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
