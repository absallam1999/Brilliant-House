import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Star,
  Briefcase,
  Building2,
  Sparkles,
  Home
} from "lucide-react";
import { Button } from "../../components/ui/button";

export default function PricingPage() {
  const [animate, setAnimate] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const pricingPlans = [
    {
      icon: Home,
      title: "Residential Plan",
      price: "$50,000+",
      description:
        "Perfect for homeowners looking to build or renovate their dream home with personalized solutions.",
      features: [
        "Custom home design",
        "Interior and exterior finishes",
        "Energy-efficient solutions",
        "Dedicated project manager",
        "6-12 month timeline",
        "Standard support",
      ],
      bestFor: "Homeowners and small-scale projects",
      cta: "Get Started",
      highlighted: false,
    },
    {
      icon: Building2,
      title: "Commercial Plan",
      price: "$100,000+",
      description:
        "Designed for businesses needing professional spaces that enhance productivity and brand identity.",
      features: [
        "Commercial building design",
        "Office and retail fit-outs",
        "Advanced project management",
        "Compliance and permits",
        "12-24 month timeline",
        "Priority support",
      ],
      bestFor: "Businesses and large-scale developments",
      cta: "Request Quote",
      highlighted: true,
    },
    {
      icon: Briefcase,
      title: "Consultation Plan",
      price: "$5,000+",
      description:
        "Ideal for clients seeking expert advice and planning for their construction or renovation projects.",
      features: [
        "Architectural consultation",
        "3D modeling and visualization",
        "Cost estimation",
        "Material selection guidance",
        "1-3 month engagement",
        "Basic support",
      ],
      bestFor: "Pre-project planning and design",
      cta: "Book Consultation",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "What factors affect the project cost?",
      answer:
        "Project costs depend on the scope, materials, timeline, and complexity. We provide detailed estimates during the consultation phase to ensure transparency.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we provide flexible payment plans tailored to your project needs. Contact us to discuss options during your consultation.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees. Our quotes are comprehensive, covering all aspects of the project. Any additional costs are discussed and approved upfront.",
    },
    {
      question: "Can I customize my plan?",
      answer:
        "Absolutely! Each plan can be tailored to your specific requirements. We work closely with you to ensure the plan fits your vision and budget.",
    },
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[var(--primary-50)] to-[var(--light-gray)] dark:from-[var(--dark-2)] dark:to-[var(--dark)]">
      {/* Hero Section */}
      <div
        className="relative bg-[var(--primary)] text-white py-24 overflow-hidden parallax-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[var(--primary-900)] opacity-60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wider bg-[var(--primary-100)] px-3 py-1 rounded-full mb-6 animate-pop">
            <Sparkles className="w-4 h-4 mr-1" />
            Pricing Plans
          </span>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            Transparent{" "}
            <span className="text-[var(--primary-light)]">Pricing</span> for
            Your Project
          </h1>
          <p
            className="text-xl text-[var(--light-gray)] max-w-3xl mx-auto leading-relaxed animate-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            Choose a plan that fits your construction needs, with clear pricing
            and no hidden fees.
          </p>
          <Button className="mt-8 bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] text-white font-semibold py-3 px-8 rounded-lg hover-lift animate-pop">
            Explore Plans
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-20 bg-white dark:bg-[var(--dark)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-dark)] dark:text-white mb-6">
              Our <span className="text-[var(--primary)]">Pricing Plans</span>
            </h2>
            <p className="text-xl text-[var(--text-gray)] max-w-3xl mx-auto">
              Flexible plans designed to meet your project requirements and
              budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-[var(--primary-50)] dark:bg-[var(--dark-2)] rounded-2xl p-6 shadow-[var(--shadow-md)] hover-lift glass-effect animate-slide-in ${
                    plan.highlighted ? "border-2 border-[var(--primary)]" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.highlighted && (
                    <span className="absolute top-4 right-4 bg-[var(--primary)] text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" /> Most Popular
                    </span>
                  )}
                  <div className="w-16 h-16 bg-[var(--primary-100)] rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow">
                    <IconComponent className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-dark)] dark:text-white mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-2xl font-semibold text-[var(--primary)] mb-4">
                    {plan.price}
                  </p>
                  <p className="text-[var(--text-gray)] mb-4">
                    {plan.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[var(--primary)] mr-2" />
                        <span className="text-[var(--text-gray)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-gray)] mb-4">
                    Best for: {plan.bestFor}
                  </p>
                  <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold py-3 rounded-lg hover-lift animate-pop">
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-[var(--primary-50)] dark:bg-[var(--dark-2)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-dark)] dark:text-white mb-6">
              Frequently Asked{" "}
              <span className="text-[var(--primary)]">Questions</span>
            </h2>
            <p className="text-xl text-[var(--text-gray)] max-w-3xl mx-auto">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[var(--dark)] rounded-xl p-6 cursor-pointer shadow-[var(--shadow-md)] hover-lift glass-effect animate-slide-in"
                onClick={() => toggleFaq(index)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[var(--text-dark)] dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--primary)] transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedFaq === index && (
                  <p className="text-[var(--text-gray)] mt-4 animate-fade-in">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-slide-in">
            Start Your Project Today
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            Get a free consultation to discuss your project and find the perfect
            plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[var(--primary)] hover:bg-[var(--primary-50)] font-semibold py-3 px-8 rounded-lg hover-lift animate-pop">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="border-white text-white hover:bg-white hover:text-[var(--primary)] font-semibold py-3 px-8 rounded-lg hover-lift animate-pop">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .animate-pop {
          animation: pop 0.4s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          70% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulseSlow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hover-lift {
          transition: transform var(--transition-base),
            box-shadow var(--transition-base);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
      `}</style>
    </section>
  );
}
