import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  BoneIcon,
  BrainIcon,
  AmbulanceIcon,
  RibbonIcon,
  StethoscopeIcon,
  MicroscopeIcon,
  ScissorsIcon,
  DropletIcon,
  XRayIcon,
  MedicalFileIcon,
  FavouriteIcon,
  KidneysIcon,
  LungsIcon,
  Baby01Icon,
  TestTubeIcon,
  BloodIcon,
  HospitalIcon,
  Building01Icon,
  AlertCircleIcon,
  HealthIcon,
  WheelchairIcon,
  ShieldCheckIcon,
  UserIcon,
  ActivityIcon,
  PotionIcon,
  Home01Icon,
  EyeIcon,
  Bug01Icon,
  RefreshIcon,
  UserGroupIcon,
  HouseHeartIcon,
  HeartCheckIcon,
  PillIcon,
  FlashIcon,
  BandageIcon,
  SparklesIcon,
  FileTextIcon,
  UserCheckIcon,
} from '@hugeicons/core-free-icons';

interface Specialty {
  id: string;
  name: string;
  icon: typeof BoneIcon;
}

const specialties: Specialty[] = [
  { id: 'orthopedic', name: 'Orthopedic', icon: BoneIcon },
  { id: 'neurosurgery', name: 'Neurosurgery', icon: BrainIcon },
  { id: 'ambulatory-surgery', name: 'Ambulatory Surgery', icon: AmbulanceIcon },
  { id: 'oncology', name: 'Oncology', icon: RibbonIcon },
  { id: 'urgent-care', name: 'Urgent Care', icon: StethoscopeIcon },
  { id: 'pathology', name: 'Pathology', icon: MicroscopeIcon },
  { id: 'general-surgery', name: 'General Surgery', icon: ScissorsIcon },
  { id: 'dermatology', name: 'Dermatology', icon: DropletIcon },
  { id: 'radiology', name: 'Radiology', icon: XRayIcon },
  { id: 'gastroenterology', name: 'Gastroenterology', icon: MedicalFileIcon },
  { id: 'cardiology', name: 'Cardiology', icon: FavouriteIcon },
  { id: 'urology', name: 'Urology', icon: KidneysIcon },
  { id: 'thoracic-surgery', name: 'Thoracic Surgery', icon: LungsIcon },
  { id: 'ob-gyn', name: 'Ob Gyn', icon: Baby01Icon },
  { id: 'clinical-lab', name: 'Clinical Lab', icon: TestTubeIcon },
  { id: 'hematology', name: 'Hematology', icon: BloodIcon },
  { id: 'medical-clinics', name: 'Medical Clinics', icon: HospitalIcon },
  { id: 'fqhc', name: 'FQHC', icon: Building01Icon },
  { id: 'traumatology', name: 'Traumatology', icon: AlertCircleIcon },
  { id: 'rheumatology', name: 'Rheumatology', icon: HealthIcon },
  { id: 'prostheses', name: 'Prostheses', icon: WheelchairIcon },
  { id: 'immunology', name: 'Immunology', icon: ShieldCheckIcon },
  { id: 'for-disabled', name: 'For Disabled', icon: UserIcon },
  { id: 'physical-therapy', name: 'Physical Therapy', icon: ActivityIcon },
  { id: 'toxicology', name: 'Toxicology', icon: PotionIcon },
  { id: 'nursing-home', name: 'Nursing Home', icon: Home01Icon },
  { id: 'pediatric', name: 'Pediatric', icon: Baby01Icon },
  { id: 'molecular-labs', name: 'Molecular Labs', icon: TestTubeIcon },
  { id: 'ophthalmology', name: 'Ophthalmology', icon: EyeIcon },
  { id: 'infectious-disease', name: 'Infectious Disease', icon: Bug01Icon },
  { id: 'rehab', name: 'Rehab', icon: RefreshIcon },
  { id: 'geriatrics', name: 'Geriatrics', icon: UserGroupIcon },
  { id: 'home-health', name: 'Home Health', icon: HouseHeartIcon },
  { id: 'hospice', name: 'Hospice', icon: HeartCheckIcon },
  { id: 'podiatry', name: 'Podiatry', icon: HealthIcon },
  { id: 'internal-medicine', name: 'Internal Medicine', icon: PillIcon },
  { id: 'endocrinology', name: 'Endocrinology', icon: FlashIcon },
  { id: 'pain-management', name: 'Pain Management', icon: HeartCheckIcon },
  { id: 'dme', name: 'DME', icon: WheelchairIcon },
  { id: 'wound-care', name: 'Wound Care', icon: BandageIcon },
  { id: 'psychiatric', name: 'Psychiatric', icon: SparklesIcon },
  { id: 'psychology', name: 'Psychology', icon: BrainIcon },
  { id: 'pulmonology', name: 'Pulmonology', icon: LungsIcon },
  { id: 'dental-billing', name: 'Dental Billing', icon: HealthIcon },
  { id: 'census-entry', name: 'Census Entry', icon: FileTextIcon },
  { id: 'hepatology', name: 'Hepatology', icon: MedicalFileIcon },
  { id: 'nephrology', name: 'Nephrology', icon: KidneysIcon },
  { id: 'family-practice', name: 'Family Practice', icon: UserCheckIcon },
  { id: 'mental-health', name: 'Mental Health', icon: BrainIcon },
];

export default function SpecialtiesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        
        {/* Hero Section */}
        <section className="bg-white py-16 px-6 md:px-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Our Specialties
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                SoftbeckMedicare specializes in providing comprehensive{' '}
                <span className="text-blue-600 font-semibold">medical billing services</span> to practices of all sizes in more than 50 specialties. Our dedicated team understands the complexities of medical billing and is committed to maximizing your revenue and minimizing administrative burdens.
              </p>
            </div>

            <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-blue-50 border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1666214280577-5f90bc36be92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medical Billing Specialties"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </section>

        {/* Specialties Grid Section */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-12">
            Explore Our Full Spectrum of Medical Billing Expertise
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {specialties.map((item) => (
              <Link
                key={item.id}
                href={`/specialities/${item.id}`}
                className="group w-full h-48 bg-white rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:bg-blue-600 transition-all duration-300 flex flex-col items-center justify-center p-5 text-center cursor-pointer hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-center h-14 w-14 text-blue-600 group-hover:text-white [--color-2:#16a34a] group-hover:[--color-2:#4ade80] transition-colors duration-300">
                  <HugeiconsIcon
                    icon={item.icon}
                    size={44}
                    strokeWidth={1.5}
                    className="transition-colors duration-300"
                  />
                </div>

                <span className="text-sm font-semibold text-slate-800 group-hover:text-white transition-colors duration-300 line-clamp-2">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}