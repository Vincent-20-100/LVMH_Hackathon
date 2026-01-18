"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { StickyHeader } from "./feature-sticky-header"
import { useRouter } from "next/navigation"
import { useUser } from "@/contexts/user-context"


// --- PAGE PRINCIPALE ---
export default function AccountCreation() {
  const router = useRouter()
  const { login } = useUser()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
  email: "john.doe@example.com",
  emailConfirmation: "john.doe@example.com",
  password: "Password123!",
  title: "mr",
  firstName: "John",
  lastName: "Doe",
  country: "fr",
  dateOfBirth: "1990-01-01",
  subscribe: true
})

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Sauvegarder l'utilisateur dans le context
    login({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    })
    router.push('/collection')
  }



  return (
    <div className="min-h-screen bg-[#faf9f7] flex flex-col">
        <StickyHeader />

        <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 mt-24">
          <div className="bg-white border border-[#e5e5e5] p-6 md:p-12">
            <h1 className="text-2xl tracking-wide mb-8 font-light">Create Your Account</h1>

            {/* Google Sign In */}
            <button className="w-full border border-[#333] rounded-full py-3 px-6 flex items-center justify-center gap-3 mb-8 hover:bg-[#f5f5f5] transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                <path fill="#FBBC05" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.712s.102-1.172.282-1.712V4.957H.957C.347 6.175 0 7.55 0 9s.347 2.825.957 4.043l3.007-2.331z"/>
                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.582C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.957L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
              </svg>
              <span className="text-sm tracking-wide">Sign In With Google</span>
            </button>

            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-[#666] mb-6">Create your account to access a personalized experience.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-tighter">Email*</label>
                  <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full border border-[#ccc] px-4 py-3 text-sm focus:border-black outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-tighter">Title*</label>
                  <select required name="title" value={formData.title} onChange={handleChange} className="w-full border border-[#ccc] px-4 py-3 text-sm outline-none bg-white">
                    <option value="">Select</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-tighter">Email Confirmation*</label>
                  <input required name="emailConfirmation" type="email" value={formData.emailConfirmation} onChange={handleChange} className="w-full border border-[#ccc] px-4 py-3 text-sm focus:border-black outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-tighter">First Name*</label>
                  <input required name="firstName" type="text" value={formData.firstName} onChange={handleChange} className="w-full border border-[#ccc] px-4 py-3 text-sm focus:border-black outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <label className="text-xs uppercase tracking-tighter">Password*</label>
                  <input required name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} className="w-full border border-[#ccc] px-4 py-3 text-sm focus:border-black outline-none" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-10 text-gray-400">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-tighter">Last Name*</label>
                  <input required name="lastName" type="text" value={formData.lastName} onChange={handleChange} className="w-full border border-[#ccc] px-4 py-3 text-sm focus:border-black outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-tighter">Country*</label>
                <select required name="country" value={formData.country} onChange={handleChange} className="w-full border border-[#ccc] px-4 py-3 text-sm outline-none bg-white">
                  <option value="">Select country</option>
                  <option value="fr">France</option>
                  <option value="us">United States</option>
                </select>
              </div>

              <div className="flex items-start gap-3 py-4">
                <input type="checkbox" name="subscribe" id="sub" checked={formData.subscribe} onChange={handleChange} className="mt-1" />
                <label htmlFor="sub" className="text-[11px] text-[#666] leading-relaxed">
                  Subscribe to receive Louis Vuitton emails. You agree to our <span className="underline cursor-pointer">Privacy Policy</span>.
                </label>
              </div>

              <button type="submit" className="w-full bg-black text-white py-4 rounded-full text-sm tracking-widest hover:bg-[#333] transition-all uppercase font-bold">
                Continue
              </button>
            </form>
          </div>
        </main>
    </div>
  )
}