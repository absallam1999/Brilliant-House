import React, { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { useCountUp } from "../../../hooks/useCountUp";
import {
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Play,
  Award,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  Home,
  Palette,
  Brush,
  Eye,
} from "lucide-react";

export default function HeroSection({ backgroundImage, sliderImages }) {
  const stats = [
    {
      value: 40,
      label: "Design Experts",
      icon: <Brush style={{ width: "1.25rem", height: "1.25rem" }} />,
    },
    {
      value: 98,
      label: "Client Satisfaction",
      icon: <Users style={{ width: "1.25rem", height: "1.25rem" }} />,
    },
    {
      value: 250,
      label: "Completed Projects",
      icon: <Home style={{ width: "1.25rem", height: "1.25rem" }} />,
    },
    {
      value: 15,
      label: "Years Experience",
      icon: <Award style={{ width: "1.25rem", height: "1.25rem" }} />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {};
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [sliderImages.length, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        transition: "all var(--transition-base)",
      }}
      className="theme-transition"
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
          transition: "opacity var(--transition-base)",
        }}
        className="dark:opacity-15 dark:brightness-90 dark:contrast-110"
      />

      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "var(--background)",
          opacity: 0.6,
          zIndex: 1,
        }}
        className="dark:opacity-90"
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-primary, linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%))",
          opacity: 0.3,
          zIndex: 2,
          backgroundSize: "200% 200%",
          animation: "gradient-x 15s ease infinite",
        }}
        className="dark:opacity-15"
      />

      {/* Geometric Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          opacity: 0.02,
          background:
            "repeating-linear-gradient(45deg, var(--border) 0, var(--border) 2px, transparent 2px, transparent 10px)",
        }}
        className="dark:opacity-10"
      />

      {/* Floating Decorative Elements */}
      <div style={{ position: "absolute", inset: 0, zIndex: 4 }}>
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "18rem",
            height: "18rem",
            backgroundColor: "var(--primary)",
            opacity: 0.15,
            borderRadius: "50%",
            filter: "blur(3rem)",
            animation: "pulse 6s ease-in-out infinite",
          }}
          className="animate-pulse"
        />
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            right: "20%",
            width: "22rem",
            height: "22rem",
            backgroundColor: "var(--accent)",
            opacity: 0.15,
            borderRadius: "50%",
            filter: "blur(3rem)",
            animation: "pulse 6s ease-in-out infinite 1s",
          }}
          className="animate-pulse delay-1000"
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          maxWidth: "90rem",
          margin: "0 auto",
          padding: "1.5rem",
          zIndex: 10,
          width: "100%",
        }}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-16 w-full">
          {/* Left Section - Text Content */}
<div
      className={`w-full lg:w-1/2 flex flex-col justify-center transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        {/* Premium Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.5rem 1.25rem",
            borderRadius: "var(--radius)",
            background:
              "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
            color: "var(--primary-foreground)",
            marginBottom: "2rem",
            animation: "fade-in 1s ease-out forwards",
            position: "relative",
            overflow: "hidden",
          }}
          className="animate-fade-in glass dark:backdrop-blur-md dark:bg-gray-800/30"
        >
          <Sparkles
            style={{
              width: "1.125rem",
              height: "1.125rem",
              color: "var(--primary-foreground)",
            }}
            className="animate-spin-slow"
          />
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: "var(--font-semibold)",
              letterSpacing: "0.05em",
            }}
          >
            Crafting Excellence Since 2008
          </span>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
              opacity: 0.2,
              animation: "pulse-glow 4s ease-in-out infinite",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "2.75rem",
            fontWeight: "var(--font-bold)",
            marginBottom: "1.75rem",
            lineHeight: "var(--line-height-tight)",
            animation: "text-reveal 1.2s ease-out forwards",
            background:
              "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          className="animate-text-reveal text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
        >
          Transform Your Space with Elegant Design Solutions
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            marginBottom: "2.5rem",
            color: "var(--muted-foreground)",
            maxWidth: "40rem",
            lineHeight: "var(--line-height-loose)",
            animation: "fade-in 1s ease-out forwards 0.3s",
          }}
          className="animate-fade-in text-base sm:text-lg md:text-xl dark:text-gray-200"
        >
          We create breathtaking interior spaces that reflect your personality and
          lifestyle. Our innovative designs blend functionality with aesthetics to
          transform your vision into reality.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            animation: "fade-in 1s ease-out forwards 0.5s",
          }}
          className="animate-fade-in sm:flex-row"
        >
          <Button
            style={{
              background:
                "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
              color: "var(--primary-foreground)",
              fontWeight: "var(--font-semibold)",
              padding: "0.875rem 2.25rem",
              borderRadius: "var(--radius)",
              minHeight: "48px",
              transition: "all var(--transition-base)",
              boxShadow: "var(--shadow-lg)",
              position: "relative",
              overflow: "hidden",
            }}
            className="hover:scale-105 hover:brightness-110 focus-ring !hover:opacity-100 group glass dark:backdrop-blur-md dark:bg-gray-800/30"
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "1.125rem",
                zIndex: 10,
              }}
            >
              Start Your Project
              <ArrowRight
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  transition: "transform var(--transition-base)",
                }}
                className="group-hover:translate-x-1.5"
              />
            </span>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                opacity: 0,
                transition: "opacity var(--transition-base)",
              }}
              className="group-hover:opacity-20"
            />
          </Button>
          <Button
            style={{
              border: "2px solid var(--primary)",
              color: "var(--primary)",
              fontWeight: "var(--font-semibold)",
              padding: "0.875rem 2.25rem",
              borderRadius: "var(--radius)",
              minHeight: "48px",
              backgroundColor: "transparent",
              transition: "all var(--transition-base)",
              position: "relative",
              overflow: "hidden",
            }}
            className="hover:scale-105 hover:brightness-110 focus-ring !hover:opacity-100 group glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-teal-400 dark:text-teal-400"
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "1.125rem",
                zIndex: 10,
              }}
              className="gradient-text dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
            >
              <Play
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  transition: "transform var(--transition-base)",
                }}
                className="group-hover:translate-x-1.5"
              />
              View Portfolio
            </span>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
                opacity: 0,
                transition: "opacity var(--transition-base)",
              }}
              className="group-hover:opacity-20"
            />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          maxWidth: "42rem",
          animation: "fade-in 1s ease-out forwards 0.7s",
        }}
        className="animate-fade-in grid-cols-2 sm:grid-cols-4"
      >
        {stats.map((stat, index) => {
          const count = useCountUp(stat.value, 2000);
          return (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "1.25rem",
                background: "var(--muted)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                transition: "all var(--transition-base)",
                animation: "fade-in 0.8s ease-out",
                animationDelay: `${index * 150 + 700}ms`,
                position: "relative",
                overflow: "hidden",
              }}
              className="hover:scale-105 hover:brightness-110 !hover:opacity-100 glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.5rem",
                  background:
                    "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  transition: "transform var(--transition-base)",
                }}
                className="group-hover:scale-110"
              >
                {stat.icon}
              </div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "var(--font-bold)",
                  marginBottom: "0.25rem",
                  background:
                    "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                className="dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
              >
                {count}
                {stat.label.includes("Client") && <span>%</span>}
                {stat.label.includes("Years") && <span>+</span>}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "var(--font-medium)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--muted-foreground)",
                }}
                className="dark:text-gray-300"
              >
                {stat.label}
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "var(--radius)",
                  border: "2px solid transparent",
                  background:
                    "linear-gradient(135deg, var(--primary), var(--accent)) border-box",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                  opacity: 0,
                  transition: "opacity var(--transition-base)",
                }}
                className="group-hover:opacity-100 dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
              />
            </div>
          );
        })}
      </div>
    </div>

          {/* Right Section - Image Slider */}
          <div
            className={`w-full lg:w-1/2 flex items-center justify-center lg:justify-end transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "32rem",
                aspectRatio: "4/5",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                transition: "all var(--transition-base)",
                animation: "slide-in-right 1s ease-out forwards",
              }}
              className="animate-slide-in-right hover:scale-105 hover:brightness-110 !hover:opacity-100 glass"
            >
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    inset: 0,
                    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                    opacity: index === currentSlide ? 1 : 0,
                    zIndex: index === currentSlide ? 10 : 0,
                    transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
                  }}
                >
                  <img
                    src={image}
                    alt={`Interior design project ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform var(--transition-base)",
                    }}
                    className="dark:brightness-90 dark:contrast-110 group-hover:scale-110"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 0%, var(--background) 100%)",
                      opacity: 0.5,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      right: "1rem",
                      backgroundColor: "var(--background)",
                      opacity: 0.9,
                      padding: "0.75rem",
                      borderRadius: "var(--radius)",
                      transform: index === currentSlide ? "translateY(0)" : "translateY(1rem)",
                      transition: "all var(--transition-base)",
                    }}
                    className="group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "var(--font-semibold)",
                        color: "var(--foreground)",
                      }}
                      className="gradient-text"
                    >
                      Project {index + 1}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Modern Interior Design
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0.75rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 20,
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      backgroundColor: index === currentSlide ? "var(--primary)" : "var(--muted-foreground)",
                      opacity: index === currentSlide ? 1 : 0.5,
                      transition: "all var(--transition-base)",
                      boxShadow: index === currentSlide ? "var(--shadow-sm)" : "none",
                    }}
                    className="hover:scale-125 hover:brightness-110 focus-ring !hover:opacity-100"
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsPlaying(false);
                      setTimeout(() => setIsPlaying(true), 10000);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 20,
                  backgroundColor: "var(--background)",
                  opacity: 0.9,
                  padding: "0.5rem",
                  borderRadius: "50%",
                  transition: "all var(--transition-base)",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="hover:scale-110 hover:brightness-110 focus-ring !hover:opacity-100"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft style={{ width: "1.25rem", height: "1.25rem" }} />
              </button>
              <button
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 20,
                  backgroundColor: "var(--background)",
                  opacity: 0.9,
                  padding: "0.5rem",
                  borderRadius: "50%",
                  transition: "all var(--transition-base)",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="hover:scale-110 hover:brightness-110 focus-ring !hover:opacity-100"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight style={{ width: "1.25rem", height: "1.25rem" }} />
              </button>

              {/* Play/Pause Button */}
              <button
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "0.75rem",
                  zIndex: 20,
                  backgroundColor: "var(--background)",
                  opacity: 0.9,
                  padding: "0.5rem",
                  borderRadius: "50%",
                  transition: "all var(--transition-base)",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="hover:scale-110 hover:brightness-110 focus-ring !hover:opacity-100"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.2rem",
                    }}
                  >
                    <div
                      style={{
                        width: "0.1rem",
                        height: "0.8rem",
                        backgroundColor: "currentColor",
                      }}
                    />
                    <div
                      style={{
                        width: "0.1rem",
                        height: "0.8rem",
                        backgroundColor: "currentColor",
                      }}
                    />
                  </div>
                ) : (
                  <Play
                    style={{
                      width: "0.8rem",
                      height: "0.8rem",
                      marginLeft: "0.1rem",
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          animation: "bounce 2s infinite",
        }}
        className="animate-bounce"
      >
        <a
          href="#about"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--muted-foreground)",
          }}
          className="hover:scale-110 hover:brightness-110 !hover:opacity-100"
        >
          <span
            style={{
              fontSize: "0.75rem",
              marginBottom: "0.5rem",
              letterSpacing: "0.05em",
            }}
            className="gradient-text"
          >
            Discover More
          </span>
          <div
            style={{
              width: "1.5rem",
              height: "2.5rem",
              border: "2px solid var(--primary)",
              borderRadius: "var(--radius)",
              display: "flex",
              justifyContent: "center",
              padding: "0.25rem",
            }}
            className="glass"
          >
            <ArrowDown
              style={{
                width: "0.875rem",
                height: "0.875rem",
                color: "var(--primary)",
              }}
              className="animate-bounce"
            />
          </div>
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          h1 {
            font-size: 2.25rem;
          }
          p {
            font-size: 1rem;
          }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 1.875rem;
          }
          p {
            font-size: 0.875rem;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.75rem;
          }
          div.hero-stat-value {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}