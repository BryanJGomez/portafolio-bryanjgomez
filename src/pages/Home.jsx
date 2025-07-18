import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Code,
  Database,
  Server,
  Cloud,
  Download,
} from "lucide-react";

import { useTheme } from "../contexts/ThemeContext";
import { baseClasses, gradients } from "../styles/theme";
import ThemeToggle from "../components/ThemeToggle";
import TechStackSection from "../components/TechStackSection";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import {
  BACKEND_TECH,
  DATABASE_TECH,
  FRONTEND_TECH,
  CLOUD_TECH,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
} from "../utils/constans";

const Portfolio = () => {
  const { isDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const downloadResume = () => {
    // Simular descarga de CV
    const link = document.createElement("a");
    link.href = "#"; // Aquí iría la URL real del CV
    link.download = "CV_Backend_Developer.pdf";
    // En una implementación real, aquí se descargaría el archivo
    alert(
      "¡Descargando CV! (En una implementación real, se descargaría el archivo PDF)"
    );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen ${baseClasses.bg} ${baseClasses.text} ${baseClasses.transition}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 ${baseClasses.navBg} backdrop-blur-md border-b ${baseClasses.border} ${baseClasses.shadowLg}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 ${gradients.primary} rounded-xl flex items-center justify-center ${baseClasses.shadowLg}`}
              >
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className={`font-bold text-xl ${baseClasses.text}`}>
                Bryan Gomez
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("tech")}
                className={`${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Tecnologías
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Contacto
              </button>
              <button
                onClick={downloadResume}
                className={`${gradients.secondary} text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 ${baseClasses.transition} flex items-center gap-2`}
              >
                <Download className="w-4 h-4" />
                CV
              </button>
              <ThemeToggle variant="simple" />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle variant="simple" />
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg ${baseClasses.hoverBg} ${baseClasses.transition}`}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden border-t ${baseClasses.border} ${baseClasses.cardBg}`}
          >
            <div className="px-6 py-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className={`block w-full text-left py-2 ${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`block w-full text-left py-2 ${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("tech")}
                className={`block w-full text-left py-2 ${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Tecnologías
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`block w-full text-left py-2 ${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`block w-full text-left py-2 ${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`block w-full text-left py-2 ${baseClasses.textSecondary} hover:text-blue-500 ${baseClasses.transition} font-medium`}
              >
                Contacto
              </button>
              <button
                onClick={downloadResume}
                className={`w-full ${gradients.secondary} text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 ${baseClasses.transition} flex items-center justify-center gap-2`}
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-24 pb-20 ${baseClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600">
              <img
                src="/profile.jpeg"
                alt="Bryan Gomez - Backend Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Backend Developer
            </h1>
            <p
              className={`text-xl md:text-2xl ${baseClasses.textSecondary} mb-8 max-w-3xl mx-auto`}
            >
              Desarrollador Backend especializado en crear APIs robustas y
              arquitecturas escalables que potencian aplicaciones modernas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className={`${gradients.primary} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg ${baseClasses.transition} transform hover:scale-105`}
              >
                Ver Proyectos
              </button>
              <button
                onClick={downloadResume}
                className={`${gradients.secondary} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg ${baseClasses.transition} transform hover:scale-105 flex items-center justify-center gap-2`}
              >
                <Download className="w-5 h-5" />
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${baseClasses.alternateBg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${baseClasses.text}`}>
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-500">
                Desarrollador Backend Apasionado
              </h3>
              <p
                className={`${baseClasses.textSecondary} text-lg leading-relaxed`}
              >
                Con más de 4 años de experiencia en desarrollo backend, me
                especializo en crear soluciones escalables y eficientes
                utilizando las mejores prácticas de la industria.
              </p>
              <p
                className={`${baseClasses.textSecondary} text-lg leading-relaxed`}
              >
                Mi enfoque se centra en escribir código limpio, mantenible y que
                resuelva problemas reales de negocio. He trabajado en proyectos
                que van desde startups hasta empresas establecidas, siempre
                buscando la excelencia técnica.
              </p>
              <div
                className={`flex items-center gap-4 ${baseClasses.textSecondary}`}
              >
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>San Miguel, El Salvador</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className={`py-20 ${baseClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${baseClasses.text}`}>
              Stack Tecnológico
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className={`${baseClasses.textSecondary} text-lg`}>
              Tecnologías y herramientas que domino para crear soluciones
              robustas y escalables
            </p>
          </div>

          <div className="space-y-16">
            <TechStackSection
              title="Backend Development"
              icon={<Server />}
              iconColor="text-green-500"
              technologies={BACKEND_TECH}
              theme={baseClasses}
              showLevel={true}
              cardSize="default"
            />

            <TechStackSection
              title="Bases de Datos"
              icon={<Database />}
              iconColor="text-blue-500"
              technologies={DATABASE_TECH}
              theme={baseClasses}
              columns="lg:grid-cols-3"
              showLevel={true}
              cardSize="default"
            />

            <TechStackSection
              title="Frontend Development"
              icon={<Code />}
              iconColor="text-purple-500"
              technologies={FRONTEND_TECH}
              theme={baseClasses}
              showLevel={true}
              cardSize="default"
            />

            <TechStackSection
              title="Cloud & DevOps"
              icon={<Cloud />}
              iconColor="text-yellow-500"
              technologies={CLOUD_TECH}
              theme={baseClasses}
              columns="lg:grid-cols-2"
              showLevel={true}
              cardSize="large"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${baseClasses.alternateBg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${baseClasses.text}`}>
              Experiencia Profesional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                theme={baseClasses}
                darkMode={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`py-20 ${baseClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${baseClasses.text}`}>
              Formación Académica
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <EducationCard
                key={index}
                education={edu}
                theme={baseClasses}
                darkMode={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${baseClasses.alternateBg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${baseClasses.text}`}>
              Proyectos Destacados
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl overflow-hidden hover:shadow-xl ${baseClasses.transition} hover:scale-105`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-500">
                    {project.title}
                  </h3>
                  <p className={`${baseClasses.textSecondary} mb-4`}>
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-500 mb-2">
                      Características:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`text-sm ${baseClasses.textSecondary} flex items-start gap-2`}
                        >
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 ${
                          isDark
                            ? "bg-gray-600 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        } text-sm rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/BryanJGomez"
                      className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${baseClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${baseClasses.text}`}>
              Contacto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-500">
                ¡Trabajemos juntos!
              </h3>
              <p className={`${baseClasses.textSecondary} mb-8 text-lg`}>
                Estoy disponible para nuevos proyectos y oportunidades. Si
                buscas un desarrollador backend experimentado, no dudes en
                contactarme.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center ${baseClasses.shadowLg}`}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold text-lg ${baseClasses.text}`}>
                      Email
                    </p>
                    <p className={baseClasses.textSecondary}>
                      bryangomez665@email.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center ${baseClasses.shadowLg}`}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold text-lg ${baseClasses.text}`}>
                      Teléfono
                    </p>
                    <p className={baseClasses.textSecondary}>+503 7928-9409</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center ${baseClasses.shadowLg}`}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold text-lg ${baseClasses.text}`}>
                      Ubicación
                    </p>
                    <p className={baseClasses.textSecondary}>
                      San Miguel, El Salvador
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/BryanJGomez"
                  className={`w-12 h-12 ${
                    isDark
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-800 hover:bg-gray-700"
                  } rounded-xl flex items-center justify-center ${
                    baseClasses.transition
                  } ${baseClasses.shadowLg}`}
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bryanjgomez/"
                  className={`w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 ${baseClasses.transition} ${baseClasses.shadowLg}`}
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <div
              className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl p-8 ${baseClasses.shadowXl}`}
            >
              <h4 className={`text-xl font-semibold mb-6 ${baseClasses.text}`}>
                Envíame un mensaje
              </h4>
              <div className="space-y-6">
                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${baseClasses.textSecondary}`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className={`w-full ${baseClasses.inputBg} border ${baseClasses.inputBorder} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${baseClasses.focusRing} ${baseClasses.transition} ${baseClasses.text}`}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${baseClasses.textSecondary}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full ${baseClasses.inputBg} border ${baseClasses.inputBorder} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${baseClasses.focusRing} ${baseClasses.transition} ${baseClasses.text}`}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${baseClasses.textSecondary}`}
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    className={`w-full ${baseClasses.inputBg} border ${baseClasses.inputBorder} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${baseClasses.focusRing} ${baseClasses.transition} resize-none ${baseClasses.text}`}
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "¡Mensaje enviado! (En una implementación real, esto enviaría el formulario)"
                    )
                  }
                  className={`w-full ${gradients.primary} text-white py-3 rounded-lg font-semibold hover:shadow-lg ${baseClasses.transition} transform hover:scale-105`}
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${baseClasses.border} ${baseClasses.alternateBg}`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={baseClasses.textSecondary}>
            © 2025 Backend Developer Portfolio. Desarrollado con React y
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
