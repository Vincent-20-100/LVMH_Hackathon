"use client";

import { useUser } from "@/contexts/user-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FeatureCollectionGrid } from "@/components/feature-collection-grid";
import { StickyHeader } from "@/components/feature-sticky-header";
import Link from "next/link";
import { ArrowLeft, LogOut } from "lucide-react";

export default function CollectionPage() {
  const { user, isConnected, isLoading, logout } = useUser();
  const router = useRouter();
  const fullName = user ? `${user.firstName} ${user.lastName}` : "";

  // Redirect to home if not connected (after loading)
  useEffect(() => {
    if (!isLoading && !isConnected) {
      router.push("/");
    }
  }, [isConnected, isLoading, router]);

  // Show loading state
  if (isLoading || !isConnected) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Sticky */}
      <StickyHeader
        leftContent={
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 text-md tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className=" w-4 h-4" />
            <span>Back to product</span>
          </Link>
        }
        rightContent={
          <button
            onClick={logout}
            className="flex items-center gap-2 text-md tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button>
        }
      />

      {/* Title & Tagline Section */}
      {fullName && (
        <div className="text-center pt-32 pb-8">
          {/* Personalized welcome */}
          <h2 className="text-2xl py-4 md:text-2xl lg:text-4xl font-light tracking-tight text-gray-900 mb-4">
            Welcome home, {fullName}.
          </h2>
          
          {/* Emotional tagline */}
          <h3 className="text-l md:text-xl lg:text-2xl ">
            Every piece tells a story, here is yours.
          </h3>
        </div>
      )}

      {/* Main Content - Product Grid */}
      <section className="max-w-full mx-auto px-6 pb-12">
        <FeatureCollectionGrid />
      </section>
    </main>
  );
}
