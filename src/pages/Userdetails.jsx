import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Userdetails = () => {
    const navigate = useNavigate()
    const [formData, setFormData]= useState({
        name:'',
        address:'',
        creditcard:'',
        expiration:'',
        cvv:'' })
        const{name,address,creditcard,expiration,cvv}=formData;
        const handleChange = (e)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
        }
        const handleSubmit=(e)=>{
            if(!name || !address ||!creditcard||!expiration||!cvv){
                alert("please fill all details")
            }else{
              navigate("/checkout")
            }
        }
  return (
    <div className=" cta w-full mx-auto py-10 ">
    <div className=" p-6 shadow-lg rounded-lg max-w-md mx-auto bg-emerald-700">
        <h1 className="text-2xl  text-white">Please fill all the details above</h1>
        <form className="mt-4">
            <div className="mb-4">
                <label for="name" className="block text-white ">Full Name</label>
                <input type="text" id="name" name="name" value={name} className="w-full border rounded-md p-2" placeholder="Enter your name"onChange={handleChange} required/>
            </div>

            <div className="mb-4">
                <label for="address" className="block text-white ">Address</label>
                <textarea id="address" name="address" value={address} className="w-full border rounded-md p-2" rows="4" placeholder="123 Main St, City, State, ZIP"onChange={(e)=>setFormData({...formData, address: e.target.value})} required></textarea>
            </div>

            <div className="mb-4">
                <label for="credit-card" className="block text-white ">Credit Card Number</label>
                <input type="text" id="creditcard" name="creditcard" value={creditcard} className="w-full border rounded-md p-2" placeholder="1234 5678 9012 3456" onChange={handleChange}required/>
            </div>

            <div className="mb-4">
                <label for="expiration" className="block text-white ">Expiration Date</label>
                <input type="text" id="expiration" name="expiration" value={expiration} className="w-full border rounded-md p-2" placeholder="MM/YY"onChange={handleChange}/>
            </div>

            <div className="mb-4">
                <label for="cvv" className="block text-white ">CVV</label>
                <input type="text" id="cvv" name="cvv" value={cvv} className="w-full border rounded-md p-2" placeholder="123" required onChange={handleChange}/>
            </div>

            
            <div className="mt-6">
            
            <button onClick={handleSubmit} type="submit" className="w-full bg-blue-500 text-white  p-3 rounded-md">Place Order</button>
            
            </div>
        </form>
    </div>
</div>
  )
}

export default Userdetails
