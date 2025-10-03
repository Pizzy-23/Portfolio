// Translations object with all content in PT and EN
const translations = {
    pt: {
        subtitle: "Desenvolvedor Backend | Especialista em Java & Node.js",
        tagline: "Construindo sistemas escaláveis de automação financeira e APIs de alta performance com impacto comprovado. Especializado em Clean Architecture, DDD e transformar desafios técnicos complexos em resultados de negócio mensuráveis.",
        location: "📍 São Paulo, SP, Brasil • Disponível para trabalho remoto (LATAM)",
        stats: {
            latency: "Redução de Latência",
            performance: "Melhoria de Performance",
            experience: "Anos de Experiência",
            saved: "Horas Economizadas/Semana"
        },
        contact: {
            email: "📧 luizcavina@gmail.com",
            phone: "📞 +55 11 98196-7825"
        },
        highlights: {
            title: "Por que Trabalhar Comigo?",
            subtitle: "Histórico comprovado entregando soluções de alto impacto que impulsionam crescimento mensurável",
            performance: {
                title: "Expert em Performance",
                desc: "Liderei otimização reduzindo processamento de pagamentos de <strong>15s para 2s</strong> (87% de melhoria), permitindo 5x mais transações simultâneas e melhorando drasticamente a experiência do usuário."
            },
            architecture: {
                title: "Arquitetura Escalável",
                desc: "Expert em Clean Architecture, DDD e microsserviços. Construí sistemas que lidam com milhões de usuários com 60% de redução de erros através de tratamento robusto de falhas e design estratégico."
            },
            remote: {
                title: "Excelência Remota",
                desc: "2+ anos trabalhando com times internacionais no Brasil, Suíça e EUA. Autogerenciável, proativo e excelente em comunicação assíncrona através de fusos horários."
            }
        },
        experience: {
            title: "Experiência Profissional",
            subtitle: "Entregando resultados mensuráveis em startups, bancos e projetos freelance internacionais",
            freelance: "Freelance & Contribuições Internacionais",
            fulltime: "Posições Full-Time",
            jobs: {
                atalho: {
                    title: "Desenvolvedor Backend - Node.js",
                    company: "atalho.ai",
                    date: "Atual",
                    achievements: [
                        "Liderei otimização crítica reduzindo latência de processamento de pagamentos de <span class='impact-metric'>15s → 2s</span> (<span class='impact-metric'>87% de melhoria</span>), permitindo escalabilidade da plataforma",
                        "Desenvolvo e mantenho integrações complexas com <strong>ERPs</strong> e <strong>APIs de Open Finance</strong> para conciliação, faturamento e processamento de pagamentos automatizados",
                        "Implementei <strong>processamento assíncrono</strong> com filas, paralelização de APIs usando Promise.all() e padrão <strong>Circuit Breaker</strong> para resiliência",
                        "Apliquei <strong>cache com Redis</strong>, eliminei <strong>queries N+1</strong> e implementei testes rigorosos alcançando <span class='impact-metric'>60% de redução de erros</span>"
                    ]
                },
                miliemind: {
                    title: "Desenvolvedor Backend - Go",
                    company: "MilieMind (Startup SaaS Suíça)",
                    date: "Mar 2024 - Presente",
                    achievements: [
                        "Contribuindo como desenvolvedor back-end para startup suíça, projetando e desenvolvendo API robusta em <strong>Go</strong>",
                        "Aplicando <strong>princípios de DDD</strong> para modelar domínios complexos, garantindo arquitetura escalável e manutenível",
                        "Trabalhando remotamente com time internacional, demonstrando forte comunicação assíncrona e mentalidade de ownership"
                    ]
                },
                grunber: {
                    title: "Desenvolvedor - Node.js",
                    company: "Grunber (EUA)",
                    date: "Baseado em projeto",
                    achievements: [
                        "Auxiliei na criação e desenvolvimento do website para aplicação de coleta de lixo nos EUA",
                        "Colaborei na implementação de dashboard de gerenciamento de pedidos de coleta, otimizando operações"
                    ]
                },
                conformetec: {
                    title: "Programador de Software",
                    company: "ConformeTec",
                    date: "Set 2023 - Jul 2025",
                    achievements: [
                        "Projetei e desenvolvi <strong>motor de regras em Go</strong> que automatizou análise de não conformidades, reduzindo geração de relatórios de <span class='impact-metric'>horas → minutos</span>",
                        "Liderei arquitetura e desenvolvimento back-end de sistema de validação, aplicando <strong>princípios de DDD</strong> para manutenibilidade a longo prazo",
                        "Implementei estratégias de <strong>cache e sincronização</strong> de dados permitindo funcionalidade offline em dispositivos móveis"
                    ],
                    tech: "<strong>Tecnologias:</strong> Go, NestJS, MySQL, Clean Architecture, AWS"
                },
                bmg: {
                    title: "Analista de Sistemas Júnior",
                    company: "Banco BMG",
                    date: "Set 2021 - Mai 2023",
                    achievements: [
                        "Evoluí <strong>APIs em NestJS</strong> para loja digital aplicando <strong>Clean Architecture</strong>, alcançando <span class='impact-metric'>40% de redução</span> no tempo de resposta",
                        "Desenvolvi e mantive <strong>API Gateway</strong> orquestrando comunicação entre front-end e <span class='impact-metric'>10+ microsserviços</span> legados",
                        "Criei proativamente <strong>automação em Node.js</strong> que eliminou <span class='impact-metric'>20+ horas/semana</span> de trabalho manual, mitigando erros operacionais"
                    ],
                    tech: "<strong>Tecnologias:</strong> NestJS, Node.js, MySQL, Firebase, Mocha"
                }
            }
        },
        projects: {
            title: "Projetos em Destaque",
            subtitle: "Projetos pessoais demonstrando expertise técnica e aprendizado contínuo",
            items: {
                qira: {
                    title: "ISF Qira",
                    subtitle: "Sistema de Análise Quantitativa de Riscos",
                    desc: "Sistema completo de análise de riscos de segurança da informação implementando metodologia FAIR com simulações Monte Carlo. 8 módulos incluindo inventário de ativos, catálogo de ameaças, análise de perdas e controles de segurança com documentação completa da API REST."
                },
                shortener: {
                    title: "API Encurtador de Links",
                    subtitle: "Serviço Backend Moderno",
                    desc: "Aplicação modular e containerizada demonstrando práticas modernas de desenvolvimento backend com autenticação abrangente, cobertura de testes e princípios de clean architecture."
                },
                finance: {
                    title: "FinanceApp",
                    subtitle: "Gestão Financeira Full-Stack",
                    desc: "Aplicação full-stack de gestão financeira com API backend robusta e frontend moderno reativo, demonstrando capacidades de desenvolvimento end-to-end."
                },
                logistics: {
                    title: "Sistema Logístico",
                    subtitle: "Solução Cross-Platform",
                    desc: "Solução logística full-stack com suporte cross-platform para Desktop (Electron) e Mobile (Capacitor), demonstrando versatilidade em construção de aplicações multiplataforma."
                }
            }
        },
        skills: {
            title: "Expertise Técnica",
            subtitle: "Conjunto abrangente de habilidades focado em construir sistemas escaláveis, manuteníveis e de alta performance",
            primary: "🚀 Stack Principal",
            architecture: "🏗️ Arquitetura",
            databases: "💾 Bancos de Dados",
            cloud: "☁️ Cloud & DevOps",
            testing: "🧪 Testes",
            tools: "🛠️ Ferramentas & Mais"
        },
        education: {
            title: "Formação & Certificações",
            subtitle: "Aprendizado contínuo e desenvolvimento profissional",
            academic: "🎓 Formação Acadêmica",
            degree: "Análise e Desenvolvimento de Sistemas",
            university: "Estácio • Mar 2022 - Cursando",
            certifications: "📜 Certificações Profissionais",
            certs: [
                "Node.js Microservices com NestJS, RabbitMQ e Cloud Services",
                "API RESTful com Node.js, TypeScript e TypeORM",
                "C# Completo e Profissional (em andamento)",
                "Java COMPLETO: Do Zero ao Profissional",
                "Azure DevOps: Boards, Repos e Pipelines"
            ]
        },
        softSkills: {
            title: "Qualidades Profissionais",
            subtitle: "Soft skills que impulsionam sucesso em ambientes remotos e colaborativos",
            items: [
                "💡 Resolução de Problemas Complexos",
                "🎯 Proatividade & Ownership",
                "💬 Comunicação Técnica Clara",
                "📚 Autodidata & Aprendizado Contínuo",
                "🤝 Colaboração em Equipe",
                "🔄 Adaptabilidade"
            ],
            languages: {
                title: "🌐 Idiomas",
                en: "<strong>Inglês:</strong> Intermediário (Leitura técnica e conversação)",
                pt: "<strong>Português:</strong> Nativo"
            }
        },
        footer: {
            title: "Vamos Construir Algo Incrível Juntos",
            subtitle: "Disponível para posições remotas contratadas • Baseado em São Paulo, Brasil (LATAM)",
            availability: "Horário flexível para overlap com fuso dos EUA • Setup completo para trabalho remoto profissional",
            email: "📧 Enviar Email",
            call: "📞 Ligar",
            copyright: "© 2025 Luiz Gustavo Cavina • Desenvolvedor Backend especializado em Java & Node.js"
        }
    },
    en: {
        subtitle: "Backend Developer | Java & Node.js Specialist",
        tagline: "Building scalable financial automation systems and high-performance APIs with proven impact. Specialized in Clean Architecture, DDD, and turning complex technical challenges into measurable business results.",
        location: "📍 São Paulo, SP, Brazil • Available for remote work (LATAM)",
        stats: {
            latency: "Latency Reduction",
            performance: "API Performance Boost",
            experience: "Years Experience",
            saved: "Hours Saved/Week"
        },
        contact: {
            email: "📧 luizcavina@gmail.com",
            phone: "📞 +55 11 98196-7825"
        },
        highlights: {
            title: "Why Work With Me?",
            subtitle: "Proven track record delivering high-impact solutions that drive measurable business growth",
            performance: {
                title: "Performance Expert",
                desc: "Led optimization reducing payment processing from <strong>15s to 2s</strong> (87% improvement), enabling 5x more simultaneous transactions and drastically improving user experience."
            },
            architecture: {
                title: "Scalable Architecture",
                desc: "Expert in Clean Architecture, DDD, and microservices. Built systems handling millions of users with 60% error reduction through robust failure handling and strategic design."
            },
            remote: {
                title: "Remote Excellence",
                desc: "2+ years working with international teams across Brazil, Switzerland, and USA. Self-managed, proactive, and excellent at asynchronous communication across time zones."
            }
        },
        experience: {
            title: "Professional Experience",
            subtitle: "Delivering measurable results across startups, banking, and international freelance projects",
            freelance: "Freelance & International Contributions",
            fulltime: "Full-Time Positions",
            jobs: {
                atalho: {
                    title: "Backend Developer - Node.js",
                    company: "atalho.ai",
                    date: "Ongoing",
                    achievements: [
                        "Led critical optimization reducing payment processing latency from <span class='impact-metric'>15s → 2s</span> (<span class='impact-metric'>87% improvement</span>), enabling platform scalability",
                        "Develop and maintain complex integrations with <strong>ERPs</strong> and <strong>Open Finance APIs</strong> for automated reconciliation, billing, and payments",
                        "Implemented <strong>asynchronous processing</strong> with queues, API parallelization using Promise.all(), and <strong>Circuit Breaker</strong> pattern for resilience",
                        "Applied <strong>Redis caching</strong>, eliminated <strong>N+1 queries</strong>, and implemented rigorous testing achieving <span class='impact-metric'>60% error reduction</span>"
                    ]
                },
                miliemind: {
                    title: "Backend Developer - Go",
                    company: "MilieMind (Swiss SaaS Startup)",
                    date: "Mar 2024 - Present",
                    achievements: [
                        "Contributing as back-end developer for Swiss startup, designing and developing robust API in <strong>Go</strong>",
                        "Applying <strong>DDD principles</strong> to model complex domains, ensuring scalable and maintainable architecture",
                        "Working remotely with international team, demonstrating strong async communication and ownership mindset"
                    ]
                },
                grunber: {
                    title: "Developer - Node.js",
                    company: "Grunber (USA)",
                    date: "Project-based",
                    achievements: [
                        "Assisted in creation and development of website for US waste collection application",
                        "Collaborated on implementing management dashboard for collection orders, optimizing service operations"
                    ]
                },
                conformetec: {
                    title: "Software Programmer",
                    company: "ConformeTec",
                    date: "Sep 2023 - Jul 2025",
                    achievements: [
                        "Designed and developed <strong>rules engine in Go</strong> that automated non-conformity analysis, reducing report generation from <span class='impact-metric'>hours → minutes</span>",
                        "Led architecture and back-end development of validation system, applying <strong>DDD principles</strong> for long-term maintainability",
                        "Implemented <strong>caching and data synchronization</strong> strategies enabling offline functionality on mobile devices"
                    ],
                    tech: "<strong>Technologies:</strong> Go, NestJS, MySQL, Clean Architecture, AWS"
                },
                bmg: {
                    title: "Junior Systems Analyst",
                    company: "Banco BMG",
                    date: "Sep 2021 - May 2023",
                    achievements: [
                        "Evolved <strong>NestJS APIs</strong> for digital store applying <strong>Clean Architecture</strong>, achieving <span class='impact-metric'>40% response time reduction</span>",
                        "Developed and maintained <strong>API Gateway</strong> orchestrating communication between front-end and <span class='impact-metric'>10+ legacy microservices</span>",
                        "Proactively created <strong>Node.js automation</strong> that eliminated <span class='impact-metric'>20+ hours/week</span> of manual work, mitigating operational errors"
                    ],
                    tech: "<strong>Technologies:</strong> NestJS, Node.js, MySQL, Firebase, Mocha"
                }
            }
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Personal projects showcasing technical expertise and continuous learning",
            items: {
                qira: {
                    title: "ISF Qira",
                    subtitle: "Quantitative Risk Analysis System",
                    desc: "Comprehensive information security risk analysis system implementing FAIR methodology with Monte Carlo simulations. 8 modules including asset inventory, threat catalog, loss analysis, and security controls with full REST API documentation."
                },
                shortener: {
                    title: "Link Shortener API",
                    subtitle: "Modern Backend Service",
                    desc: "Modular and containerized application demonstrating modern backend development practices with comprehensive authentication, testing coverage, and clean architecture principles."
                },
                finance: {
                    title: "FinanceApp",
                    subtitle: "Full-Stack Financial Management",
                    desc: "Full-stack financial management application with robust backend API and modern reactive frontend, showcasing end-to-end development capabilities."
                },
                logistics: {
                    title: "Logistics System",
                    subtitle: "Cross-Platform Solution",
                    desc: "Full-stack logistics solution with cross-platform support for Desktop (Electron) and Mobile (Capacitor), demonstrating versatility in building multi-platform applications."
                }
            }
        },
        skills: {
            title: "Technical Expertise",
            subtitle: "Comprehensive skill set focused on building scalable, maintainable, high-performance systems",
            primary: "🚀 Primary Stack",
            architecture: "🏗️ Architecture",
            databases: "💾 Databases",
            cloud: "☁️ Cloud & DevOps",
            testing: "🧪 Testing",
            tools: "🛠️ Tools & More"
        },
        education: {
            title: "Education & Certifications",
            subtitle: "Continuous learning and professional development",
            academic: "🎓 Academic Education",
            degree: "Analysis and Systems Development",
            university: "Estácio • Mar 2022 - Attending",
            certifications: "📜 Professional Certifications",
            certs: [
                "Node.js Microservices with NestJS, RabbitMQ and Cloud Services",
                "RESTful API with Node.js, TypeScript and TypeORM",
                "C# Complete and Professional (in progress)",
                "Java COMPLETE: From Zero to Professional",
                "Azure DevOps: Boards, Repos and Pipelines"
            ]
        },
        softSkills: {
            title: "Professional Qualities",
            subtitle: "Soft skills that drive success in remote and collaborative environments",
            items: [
                "💡 Complex Problem Solving",
                "🎯 Proactivity & Ownership",
                "💬 Clear Technical Communication",
                "📚 Self-Taught & Continuous Learner",
                "🤝 Team Collaboration",
                "🔄 Adaptability"
            ],
            languages: {
                title: "🌐 Languages",
                en: "<strong>English:</strong> Intermediate (Technical reading and conversation)",
                pt: "<strong>Portuguese:</strong> Native"
            }
        },
        footer: {
            title: "Let's Build Something Amazing Together",
            subtitle: "Available for remote contracted positions • Based in São Paulo, Brazil (LATAM)",
            availability: "Flexible schedule for US time zone overlap • Complete professional remote work setup",
            email: "📧 Email Me",
            call: "📞 Call",
            copyright: "© 2025 Luiz Gustavo Cavina • Backend Developer specialized in Java & Node.js"
        }
    }
};

let currentLang = localStorage.getItem('portfolioLang') || 'en';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);
    
    document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    renderContent();
}

function renderContent() {
    const t = translations[currentLang];
    
    const html = `
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>Luiz Gustavo Cavina</h1>
                    <p class="subtitle">${t.subtitle}</p>
                    <p class="tagline">${t.tagline}</p>
                    <div class="location-badge">${t.location}</div>
                    
                    <div class="hero-stats">
                        <div class="stat">
                            <span class="stat-number">87%</span>
                            <span class="stat-label">${t.stats.latency}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">40%</span>
                            <span class="stat-label">${t.stats.performance}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">3+</span>
                            <span class="stat-label">${t.stats.experience}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">20+</span>
                            <span class="stat-label">${t.stats.saved}</span>
                        </div>
                    </div>

                    <div class="contact-links">
                        <a href="mailto:luizcavina@gmail.com" class="btn btn-primary">${t.contact.email}</a>
                        <a href="tel:+5511981967825" class="btn btn-outline">${t.contact.phone}</a>
                        <a href="https://linkedin.com/in/luiz-gustavo-cavina-faria" target="_blank" class="btn btn-outline">LinkedIn</a>
                        <a href="https://github.com/Pizzy-23" target="_blank" class="btn btn-outline">GitHub</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="highlights">
            <div class="container">
                <div class="section-header">
                    <h2>${t.highlights.title}</h2>
                    <p>${t.highlights.subtitle}</p>
                </div>

                <div class="highlight-grid">
                    <div class="highlight-card">
                        <div class="highlight-icon">⚡</div>
                        <h3>${t.highlights.performance.title}</h3>
                        <p>${t.highlights.performance.desc}</p>
                    </div>

                    <div class="highlight-card">
                        <div class="highlight-icon">🏗️</div>
                        <h3>${t.highlights.architecture.title}</h3>
                        <p>${t.highlights.architecture.desc}</p>
                    </div>

                    <div class="highlight-card">
                        <div class="highlight-icon">🌍</div>
                        <h3>${t.highlights.remote.title}</h3>
                        <p>${t.highlights.remote.desc}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="experience">
            <div class="container">
                <div class="section-header">
                    <h2>${t.experience.title}</h2>
                    <p>${t.experience.subtitle}</p>
                </div>

                <div class="timeline">
                    <div class="experience-category">
                        <h3>${t.experience.freelance}</h3>
                        
                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div class="timeline-title">
                                    <h4>${t.experience.jobs.atalho.title} <span class="company">| ${t.experience.jobs.atalho.company}</span></h4>
                                </div>
                                <div class="timeline-date">${t.experience.jobs.atalho.date}</div>
                            </div>
                            <ul class="timeline-achievements">
                                ${t.experience.jobs.atalho.achievements.map(a => `<li>${a}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div class="timeline-title">
                                    <h4>${t.experience.jobs.miliemind.title} <span class="company">| ${t.experience.jobs.miliemind.company}</span></h4>
                                </div>
                                <div class="timeline-date">${t.experience.jobs.miliemind.date}</div>
                            </div>
                            <ul class="timeline-achievements">
                                ${t.experience.jobs.miliemind.achievements.map(a => `<li>${a}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div class="timeline-title">
                                    <h4>${t.experience.jobs.grunber.title} <span class="company">| ${t.experience.jobs.grunber.company}</span></h4>
                                </div>
                                <div class="timeline-date">${t.experience.jobs.grunber.date}</div>
                            </div>
                            <ul class="timeline-achievements">
                                ${t.experience.jobs.grunber.achievements.map(a => `<li>${a}</li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="experience-category">
                        <h3>${t.experience.fulltime}</h3>

                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div class="timeline-title">
                                    <h4>${t.experience.jobs.conformetec.title} <span class="company">| ${t.experience.jobs.conformetec.company}</span></h4>
                                </div>
                                <div class="timeline-date">${t.experience.jobs.conformetec.date}</div>
                            </div>
                            <ul class="timeline-achievements">
                                ${t.experience.jobs.conformetec.achievements.map(a => `<li>${a}</li>`).join('')}
                            </ul>
                            <div class="tech-stack">${t.experience.jobs.conformetec.tech}</div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div class="timeline-title">
                                    <h4>${t.experience.jobs.bmg.title} <span class="company">| ${t.experience.jobs.bmg.company}</span></h4>
                                </div>
                                <div class="timeline-date">${t.experience.jobs.bmg.date}</div>
                            </div>
                            <ul class="timeline-achievements">
                                ${t.experience.jobs.bmg.achievements.map(a => `<li>${a}</li>`).join('')}
                            </ul>
                            <div class="tech-stack">${t.experience.jobs.bmg.tech}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="projects">
            <div class="container">
                <div class="section-header">
                    <h2>${t.projects.title}</h2>
                    <p>${t.projects.subtitle}</p>
                </div>

                <div class="project-grid">
                    <div class="project-card">
                        <div class="project-header">
                            <h4>${t.projects.items.qira.title}</h4>
                            <div class="project-subtitle">${t.projects.items.qira.subtitle}</div>
                        </div>
                        <div class="project-body">
                            <p>${t.projects.items.qira.desc}</p>
                            <div class="tech-tags">
                                <span class="tech-tag">Java 17</span>
                                <span class="tech-tag">Spring Boot 3.2</span>
                                <span class="tech-tag">Clean Architecture</span>
                                <span class="tech-tag">DDD</span>
                                <span class="tech-tag">MySQL</span>
                                <span class="tech-tag">Swagger</span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-header">
                            <h4>${t.projects.items.shortener.title}</h4>
                            <div class="project-subtitle">${t.projects.items.shortener.subtitle}</div>
                        </div>
                        <div class="project-body">
                            <p>${t.projects.items.shortener.desc}</p>
                            <div class="tech-tags">
                                <span class="tech-tag">NestJS</span>
                                <span class="tech-tag">TypeScript</span>
                                <span class="tech-tag">JWT</span>
                                <span class="tech-tag">Docker</span>
                                <span class="tech-tag">Jest</span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-header">
                            <h4>${t.projects.items.finance.title}</h4>
                            <div class="project-subtitle">${t.projects.items.finance.subtitle}</div>
                        </div>
                        <div class="project-body">
                            <p>${t.projects.items.finance.desc}</p>
                            <div class="tech-tags">
                                <span class="tech-tag">C#/.NET</span>
                                <span class="tech-tag">Next.js</span>
                                <span class="tech-tag">PostgreSQL</span>
                                <span class="tech-tag">REST API</span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-header">
                            <h4>${t.projects.items.logistics.title}</h4>
                            <div class="project-subtitle">${t.projects.items.logistics.subtitle}</div>
                        </div>
                        <div class="project-body">
                            <p>${t.projects.items.logistics.desc}</p>
                            <div class="tech-tags">
                                <span class="tech-tag">C#/.NET</span>
                                <span class="tech-tag">Electron</span>
                                <span class="tech-tag">Capacitor</span>
                                <span class="tech-tag">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="skills">
            <div class="container">
                <div class="section-header">
                    <h2>${t.skills.title}</h2>
                    <p>${t.skills.subtitle}</p>
                </div>

                <div class="skills-grid">
                    <div class="skill-category">
                        <h4>${t.skills.primary}</h4>
                        <div class="skill-list">
                            <span class="skill-item skill-primary">Java (Spring Boot)</span>
                            <span class="skill-item skill-primary">Node.js (NestJS)</span>
                            <span class="skill-item">TypeScript</span>
                            <span class="skill-item">Go</span>
                            <span class="skill-item">Quarkus</span>
                            <span class="skill-item">Express.js</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h4>${t.skills.architecture}</h4>
                        <div class="skill-list">
                            <span class="skill-item">Clean Architecture</span>
                            <span class="skill-item">DDD</span>
                            <span class="skill-item">Microservices</span>
                            <span class="skill-item">REST APIs</span>
                            <span class="skill-item">Hexagonal</span>
                            <span class="skill-item">API Integration</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h4>${t.skills.databases}</h4>
                        <div class="skill-list">
                            <span class="skill-item">PostgreSQL</span>
                            <span class="skill-item">MySQL</span>
                            <span class="skill-item">MongoDB</span>
                            <span class="skill-item">Redis</span>
                            <span class="skill-item">Firebase</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h4>${t.skills.cloud}</h4>
                        <div class="skill-list">
                            <span class="skill-item">AWS (S3, EC2, Lambda)</span>
                            <span class="skill-item">Docker</span>
                            <span class="skill-item">CI/CD</span>
                            <span class="skill-item">Azure DevOps</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h4>${t.skills.testing}</h4>
                        <div class="skill-list">
                            <span class="skill-item">Jest</span>
                            <span class="skill-item">Mocha</span>
                            <span class="skill-item">Unit Testing</span>
                            <span class="skill-item">Integration Tests</span>
                            <span class="skill-item">E2E Testing</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h4>${t.skills.tools}</h4>
                        <div class="skill-list">
                            <span class="skill-item">Git/GitHub</span>
                            <span class="skill-item">Swagger</span>
                            <span class="skill-item">Postman</span>
                            <span class="skill-item">Jira</span>
                            <span class="skill-item">C#/.NET</span>
                            <span class="skill-item">Pino</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="education">
            <div class="container">
                <div class="section-header">
                    <h2>${t.education.title}</h2>
                    <p>${t.education.subtitle}</p>
                </div>

                <div class="education-grid">
                    <div class="education-card">
                        <h4>${t.education.academic}</h4>
                        <p class="degree-info">${t.education.degree}</p>
                        <p style="color: var(--gray); margin-top: 5px;">${t.education.university}</p>
                    </div>

                    <div class="education-card">
                        <h4>${t.education.certifications}</h4>
                        <ul>
                            ${t.education.certs.map(cert => `<li>${cert}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="soft-skills">
            <div class="container">
                <div class="section-header">
                    <h2>${t.softSkills.title}</h2>
                    <p>${t.softSkills.subtitle}</p>
                </div>

                <div class="soft-skills-grid">
                    ${t.softSkills.items.map(skill => `<div class="soft-skill-card"><h5>${skill}</h5></div>`).join('')}
                </div>

                <div class="languages-box">
                    <h4>${t.softSkills.languages.title}</h4>
                    <p>
                        ${t.softSkills.languages.en}<br>
                        ${t.softSkills.languages.pt}
                    </p>
                </div>
            </div>
        </section>

        <footer>
            <div class="container">
                <div class="footer-content">
                    <h2>${t.footer.title}</h2>
                    <p>${t.footer.subtitle}</p>
                    <p>${t.footer.availability}</p>
                    
                    <div class="footer-links">
                        <a href="mailto:luizcavina@gmail.com" class="btn btn-primary">${t.footer.email}</a>
                        <a href="tel:+5511981967825" class="btn btn-outline">${t.footer.call}</a>
                        <a href="https://linkedin.com/in/luiz-gustavo-cavina-faria" target="_blank" class="btn btn-outline">LinkedIn</a>
                        <a href="https://github.com/Pizzy-23" target="_blank" class="btn btn-outline">GitHub</a>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>${t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    `;
    
    document.getElementById('content').innerHTML = html;
}

// Initialize on page load
changeLanguage(currentLang);
