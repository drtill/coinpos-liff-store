import React from 'react';
import Image from 'next/image';

const QRPaymentPayment = (
    { 
        register, 
        Icon, 
        name, 
        value,
        qrUrl,
    }) => {
  
        
  
  
        return (
    <div className="px-3 py-4 card border border-gray-200 bg-white rounded-md">
      <label className="cursor-pointer label">
        <div className="flex item-center justify-between">
            <div className="flex items-center">
                <Image
                src={qrUrl}
                width={160}
                height={160}
                
                className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                />
            </div>
            
        </div>
      </label>
    </div>
  );
};

export default QRPaymentPayment;
