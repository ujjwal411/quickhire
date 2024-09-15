import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className='p-5 rounded-md bg-green border border-gray-100 cursor-pointer'
      style={{
        boxShadow: '0 20px 25px -5px rgba(96, 166, 58, 0.49), 0 8px 10px -6px rgba(0, 196, 255, 0.88)'
      }}
    >
      <div>
      <h1 className='font-medium text-lg' style={{ color: 'rgb(176, 22, 22)' }}>
  {job?.company?.name
    ?.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')}
</h1>



        <p className='text-sm text-gray-500'>India</p>
      </div>
      <div>
      <h1 className='font-bold text-lg my-2'>
  {job?.title
    ?.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')}
</h1>

        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
