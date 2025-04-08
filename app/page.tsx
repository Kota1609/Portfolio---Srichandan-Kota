"use client";

import * as React from "react";
import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Server,
  Zap,
  Globe,
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/enhanced-buttons";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { smoothScroll } from "@/utils/smoothScroll";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import ShineBorder from "@/components/ui/shine-border";
import DotPattern from "@/components/ui/dot-pattern";
import LetterPullup from "@/components/ui/letter-pullup";
import MountainParallax from "@/components/ui/mountain-parallax";
import SparklesText from "@/components/ui/sparkles-text";
import dynamic from 'next/dynamic';
import ShineEffect from "@/components/ui/shine-effect";
import FlameCardEffect from "@/components/ui/flame-card-effect";

// Create a client-side only component for floating elements
const FloatingElements = dynamic(() => import('@/components/ui/floating-elements'), {
  ssr: false
});

// Create a client-side only component for small floating elements
const SmallFloatingElements = dynamic(() => import('@/components/ui/small-floating-elements'), {
  ssr: false
});

// Create a client-side only component for confetti button
const DynamicConfettiButton = dynamic(() => import('@/components/ui/confetti'), {
  ssr: false
});

export default function Home() {
  const projects = [
    {
      title: "Agentic AI - Model Context Protocol",
      desc: "Agentic AI project using Anthropic's Model Context Protocol implementation where LLMs can be used as agents to complete tasks",
      tech: ["Next.js", "React", "Node.js", "LLMs","Anthropic", "Vercel"],
      url: "http://mcp-ai-music.vercel.app/",
      github: "https://github.com/Kota1609/MusicStore-Frontend",
      image: "/images/modelcontextprotocol-agenticAI.webp",
      alt: "Agentic AI Picture",
    },{
      title: "UNT Course Guide",
      desc: "Real-time UNT class availability tracker with AI Course ChatBot",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Pinecone", "Airtable", "OpenAI", "Vercel"],
      url: "https://unt-course-guide.vercel.app/",
      github: "https://github.com/Kota1609/UNT-course-guide",
      image: "/images/UNT-couse-guide.webp",
      alt: "UNT Course Guide",
    },
    
    {
      title: "Gen AI UNT",
      desc: "UNT Gen AI application implementation using AWS, ECR, Docker, Langchain, and Huggingface",
      tech: ["Python", "AWS", "Docker", "Langchain", "Huggingface", "Llama", "OpenAI","LLMs","Finetuning"],
      url: "https://github.com/Kota1609/RAG-With-AWS-Lambda-ECR-Docker-Langchain-Huggingface",
      github: "https://github.com/Kota1609/RAG-With-AWS-Lambda-ECR-Docker-Langchain-Huggingface",
      image: "/images/rag-aws.webp",
      alt: "Gen AI UNT",
    },
  ];

  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => smoothScroll(null);

  return (
    <main className="min-h-screen text-zinc-900 antialiased">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-[#ff4500]/20">
        <nav className="container mx-auto px-3 sm:px-6 h-16">
          <div className="flex items-center justify-between h-full gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-[#ff4500]/20 text-[#ff4500] hover:text-[#ff8c00] transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/kota-srichandan",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-[#ff4500]/20 text-[#ff4500] hover:text-[#ff8c00] transition-all duration-300"
                  onClick={() =>
                    window.open("https://github.com/Kota1609", "_blank")
                  }
                >
                  <Github className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center gap-1 sm:gap-4">
              {["About", "Projects", "Work Experience", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full hover:bg-[#ff4500]/20 text-[#ff4500] hover:text-[#ff8c00] transition-all duration-300 px-2 sm:px-4"
                    onClick={() => {
                      const targetId = item === "Work Experience" 
                        ? "experience" 
                        : item.toLowerCase().replace(" ", "-");
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative bg-gradient-to-b from-white via-[#fff5f0] to-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500]/5 via-[#ff8c00]/5 to-[#ff4500]/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.05),transparent_50%)]" />
          {/* Flame-like patterns */}
          <div className="absolute inset-0 bg-[url('/images/flame-pattern.svg')] bg-repeat opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElements />
        </div>

        {/* Small Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallFloatingElements />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 sm:space-y-8 -mt-[15vh] sm:-mt-[20vh] md:-mt-[25vh] lg:-mt-[30vh]"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] relative mx-auto"
              >
                <ShineBorder
                  borderRadius={999}
                  borderWidth={5}
                  duration={6}
                  color={["#ff4500", "#ff8c00", "#ff4500"]}
                  className="!min-h-0 !min-w-0 !p-1 !bg-transparent w-full h-full rounded-full overflow-hidden"
                >
                  <motion.div
                    className="w-full h-full relative rounded-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/profile.webp"
                      alt="Srichandan Kota Profile Photo"
                      fill
                      className="rounded-full object-cover hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </motion.div>
                </ShineBorder>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  <LetterPullup
                    words="Srichandan Kota"
                    className="inline-block text-[#ff4500] [text-shadow:_0_0_10px_rgba(255,69,0,0.3)]"
                    delay={0.075}
                  />
                </h1>
                <motion.p
                  className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto font-semibold"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="inline-block text-[#ff4500] [text-shadow:_0_0_10px_rgba(255,69,0,0.3)]"
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 15,
                    }}
                  >
                    Full Stack Engineer | AI Engineer | Cloud Architect
                  </motion.span>
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="flex items-center justify-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <InteractiveHoverButton
                    text="Let's Connect!"
                    onClick={() => smoothScroll("contact")}
                    className="bg-[#ff4500] text-white hover:bg-[#ff8c00] w-48 py-3 text-lg shadow-lg hover:shadow-[#ff4500]/20"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col items-center"
          >
            <span className="text-[#ff4500]/80 text-sm mb-2">Scroll Down</span>
            <ChevronUp className="w-6 h-6 text-[#ff4500]/80 rotate-180" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white relative z-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500]/5 via-[#ff8c00]/5 to-[#ff4500]/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.05),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/images/flame-pattern.svg')] bg-repeat opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Small Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallFloatingElements />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#ff4500] mb-12 text-center [text-shadow:_0_0_10px_rgba(255,69,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-zinc-700">
                With over 5 years of professional experience, I am a driven Full Stack Engineer adept at architecting scalable microservices and developing cutting-edge AI-powered applications. Holding a Master's in Computer Science, my expertise spans backend, frontend, cloud infrastructure, and AI technologies, enabling me to deliver robust, high-performance solutions across diverse domains.
              </p>
              <p className="text-lg leading-relaxed text-zinc-700">
                Seeking full-time roles in Software Engineering, Generative AI, AI/ML, or Cloud Computing. Let's connect and build the future of technology together!
              </p>

            </motion.div>

            <div className="relative w-full h-[450px]">
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute right-0 -top-10 bottom-0 w-[350px] h-[450px]"
              >
                <Image
                  src="/images/professional-photo.webp"
                  alt="Srichandan Kota Professional Photo"
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ff4500] shadow-[0_20px_80px_rgba(255,69,0,0.3)] hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute right-[40%] bottom-0 w-[300px] h-[400px]"
              >
                <Image
                  src="/images/casual-photo.webp"
                  alt="Srichandan Kota Casual Photo"
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ff4500] shadow-[0_20px_80px_rgba(255,69,0,0.3)] hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500]/5 via-[#ff8c00]/5 to-[#ff4500]/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.05),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/images/flame-pattern.svg')] bg-repeat opacity-5" />
        </div>

        {/* Small Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallFloatingElements />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#ff4500] mb-12 text-center [text-shadow:_0_0_10px_rgba(255,69,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white border-[#ff4500]/10 hover:border-[#ff4500]/30 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#ff4500] mb-2 group-hover:text-[#ff8c00] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-zinc-700 mb-4">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-[#ff4500]/10 text-[#ff4500] border-[#ff4500]/20 hover:bg-[#ff4500]/20 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.github && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Button
                              asChild
                              variant="outline"
                              className="w-full bg-[#ff4500]/10 border-[#ff4500]/20 text-[#ff4500] hover:bg-[#ff4500]/20 hover:border-[#ff4500]/30 transition-colors duration-300"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {project.url && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Button
                              asChild
                              variant="outline"
                              className="w-full bg-[#ff4500]/10 border-[#ff4500]/20 text-[#ff4500] hover:bg-[#ff4500]/20 hover:border-[#ff4500]/30 transition-colors duration-300"
                            >
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 relative bg-gradient-to-b from-white via-[#fff5f0] to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500]/5 via-[#ff8c00]/5 to-[#ff4500]/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.05),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/images/flame-pattern.svg')] bg-repeat opacity-10" />
        </div>

        {/* Small Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallFloatingElements />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#ff4500] mb-12 text-center [text-shadow:_0_0_10px_rgba(255,69,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#ff4500]/20 hover:border-[#ff4500]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-xl font-bold text-[#ff4500]">Generative AI Engineer</h3>
                <span className="text-zinc-600">Feb 2024 - Present</span>
              </div>
              <p className="text-zinc-700 mt-2">University of North Texas - Denton, TX, USA</p>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#ff4500]/20 hover:border-[#ff4500]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-xl font-bold text-[#ff4500]">Software Engineer Intern</h3>
                <span className="text-zinc-600">May 2024 - Aug 2024</span>
              </div>
              <p className="text-zinc-700 mt-2">
                Idaho National Lab (Nuclear) - Idaho Falls, ID, USA
                <a 
                  href="https://inl.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-[#ff4500] hover:text-[#ff8c00] transition-colors"
                >
                  Link: INL
                </a>
              </p>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#ff4500]/20 hover:border-[#ff4500]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-xl font-bold text-[#ff4500]">Software Engineer</h3>
                <span className="text-zinc-600">Jan 2022 - July 2023</span>
              </div>
              <p className="text-zinc-700 mt-2">
                Juspay (FinTech) - Bangalore, India
                <a 
                  href="https://juspay.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-[#ff4500] hover:text-[#ff8c00] transition-colors"
                >
                  Link: Juspay
                </a>
              </p>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#ff4500]/20 hover:border-[#ff4500]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-xl font-bold text-[#ff4500]">Software Engineer</h3>
                <span className="text-zinc-600">July 2019 - Dec 2021</span>
              </div>
              <p className="text-zinc-700 mt-2">
                Clear Exam (EdTech) - Jaipur, India
                <a 
                  href="https://www.cleariitmedical.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-[#ff4500] hover:text-[#ff8c00] transition-colors"
                >
                  Link: Clear Exam
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-28 pt-32 bg-gradient-to-b from-[#1a0000] to-[#2a0000] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500]/5 to-[#ff8c00]/5" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElements />
        </div>

        {/* Small Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallFloatingElements />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            viewport={{ once: true }}
          >
            Let's Connect!
          </motion.h2>

          <motion.div
            className="max-w-2xl mx-auto bg-[#2a0000]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#ff4500]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p className="text-xl text-white/90 mb-8 leading-relaxed">
              Phone: (940) 843-8548
              <br />
              Email: kotasc18@gmail.com
              <br />
              Location: Anywhere in the USA
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="bg-[#ff4500]/10 border-[#ff4500]/20 text-[#ff4500] hover:bg-[#ff4500]/20 hover:border-[#ff4500]/30 transition-colors duration-300 rounded-full text-lg px-6 py-2"
                >
                  <a href="mailto:kotasc18@gmail.com" className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="outline"
                  className="bg-[#ff4500]/10 border-[#ff4500]/20 text-[#ff4500] hover:bg-[#ff4500]/20 hover:border-[#ff4500]/30 transition-colors duration-300 rounded-full text-lg px-6 py-2"
                  onClick={() =>
                    window.open("https://linkedin.com/in/kota-srichandan", "_blank")
                  }
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="outline"
                  className="bg-[#ff4500]/10 border-[#ff4500]/20 text-[#ff4500] hover:bg-[#ff4500]/20 hover:border-[#ff4500]/30 transition-colors duration-300 rounded-full text-lg px-6 py-2"
                  onClick={() => window.open("https://github.com/Kota1609", "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to top button */}
      <motion.div
        className="fixed bottom-8 right-20 z-[70]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full p-2 bg-white/80 backdrop-blur-sm border-primary text-primary hover:ring-2 hover:ring-primary/90 hover:ring-offset-2 "
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 text-center text-white/90 bg-[#2a0000] relative">
        <div className="container mx-auto px-6">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Srichandan Kota. Built with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#ff4500] hover:text-[#ff8c00] transition-colors"
            >
              Next.js
            </a>{" "}
            ,{" "}
            <a

              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#ff4500] hover:text-[#ff8c00] transition-colors"
            >
              Tailwind CSS
            </a>
            {", "}and deployed with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#ff4500] hover:text-[#ff8c00] transition-colors"
            >
              Vercel
            </a>
          </p>
        </div>
        <motion.div

        >
          <motion.div className="inline-block" transition={{ duration: 0.2 }}>
            <DynamicConfettiButton
              className="bg-transparent hover:bg-transparent p-0 border-none shadow-none"
              options={{
                spread: 360,
                ticks: 100,
                gravity: 0.5,
                decay: 0.94,
                startVelocity: 30,
                particleCount: 100,
                scalar: 1,
                colors: ["#ff4500", "#ff8c00"],
              }}
            >

            </DynamicConfettiButton>
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}
