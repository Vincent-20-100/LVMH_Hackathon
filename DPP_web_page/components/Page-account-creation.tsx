"use client"

import { useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

const getAssetPath = (path: string) => `/LVMH_Hackathon/${path.startsWith('/') ? path.slice(1) : path}`;

// --- HEADER RESPONSIVE ---
function StickyHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 10) setIsVisible(true)
      else if (currentScrollY < lastScrollY) setIsVisible(true)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) setIsVisible(false)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 px-6 py-6 md:py-8 md:px-12 lg:px-20 border-b border-[#e5e5e5] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between relative min-h-[40px]">
        <span className="hidden md:block text-xs tracking-[0.3em] uppercase text-muted-foreground">MyLV Account</span>
        <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 text-center w-full">
          <div className="text-xl md:text-2xl tracking-[0.1em] luxury-brand font-bold">LOUIS VUITTON</div>
          <span className="block md:hidden text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">Account Creation</span>
        </div>
        <span className="hidden md:block text-xs tracking-[0.2em] uppercase text-muted-foreground">Paris</span>
      </div>
    </header>
  )
}

// --- ANIMATION DE TRANSITION (CARTE QUI TOURNE ET ZOOM) ---
function AuraCardTransition({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 2800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden">
      <div className="relative perspective-[2000px]">
        <div className="w-[280px] h-[400px] sm:w-[330px] sm:h-[470px]"
             style={{ animation: 'cardReveal 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards' }}>
          <div className="relative h-full w-full bg-[#3d3d3d] rounded-[16px] shadow-2xl">
            <div className="relative h-full w-full bg-[#d5d3d0] rounded-[13px] overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${getAssetPath("card_background-2.png")}')`, backgroundSize: '120%', filter: 'grayscale(1) brightness(3)' }} />
              <div className="relative h-full flex flex-col px-8 pt-10 pb-6 text-center">
                <h1 className="text-xl sm:text-2xl tracking-[0.1em] luxury-brand font-bold text-[#2d2d2d] mb-8">LOUIS VUITTON</h1>
                <div className="flex-1 flex items-center justify-center relative">
                   <div className="absolute w-32 h-32 bg-[#09dcba]/20 rounded-full blur-3xl" />
                   <img src={getAssetPath("card-aura-logo-2.png")} alt="Aura" className="w-40 h-auto relative z-10" />
                </div>
                <div className="space-y-1 mb-8">
                  <h2 className="text-lg font-light tracking-widest text-[#2d2d2d]">AURA</h2>
                  <h2 className="text-lg font-light tracking-widest text-[#2d2d2d]">BLOCKCHAIN</h2>
                </div>
                <div className="flex flex-col gap-1 border-t border-black/10 pt-4">
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em]">Authenticity Certificate</span>
                  <span className="text-lg sm:text-xl font-mono opacity-50">#F7-RA598-LV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes cardReveal {
          0% { transform: scale(0.2) rotateY(0deg) rotateX(45deg); opacity: 0; }
          20% { transform: scale(1) rotateY(180deg) rotateX(0deg); opacity: 1; }
          40% { transform: scale(1.1) rotateY(360deg); }
          60% { transform: scale(1) rotateY(540deg); }
          100% { transform: scale(15) rotateY(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

// --- PAGE PRINCIPALE ---
export default function AccountCreation() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const [formData, setFormData] = useState({
    email: "", emailConfirmation: "", password: "", title: "", firstName: "", lastName: "", country: "", dateOfBirth: "", subscribe: false
  })

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowTransition(true)
  }

  return (
    <>
      {showTransition && <AuraCardTransition onComplete={() => router.push('/')} />}

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
    </>
  )
}