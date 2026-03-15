new Vue({
    el: "#app",
    data: {
        name: "EVANDRO ARAÚJO LUZ",
        title: "FULLSTACK DEVELOPER",
        email: "devealuz@gmail.com",
        github: "https://github.com/d3vluz",
        githubDisplay: "github.com/d3vluz",
        linkedin: "https://www.linkedin.com/in/evandro-luz",
        linkedinDisplay: "linkedin.com/in/evandro-luz",
        location: "Fortaleza, Ceará, Brasil",
        phone: "(85) 98410-0819",
        libsFrameworks: [
            { name: "React Native / Expo – desenvolvimento de aplicativos móveis", },
            { name: "Flutter – desenvolvimento de aplicativos móveis" },
            { name: "React / Next.js – desenvolvimento web" },
            { name: "Django - full stack framework" },
            { name: "FastAPI - backend framework" },
            { name: "n8n - automação de processos e fluxos de trabalho" },
        ],
        programmingLanguages: [
            "JavaScript (JS)",
            "TypeScript (TS)",
            "Python",
            "C Sharp (C#)",
        ],
        experiences: [
            {
                role: "Desenvolvedor Fullstack",
                company: "APROVA-AI",
                period: "Out 2024 - Jul 2025",
                tasks: [
                    "Responsável por toda a identidade visual e design da empresa. Além do Desenvolvimento completo do site e da aplicação web da plataforma. Criação de fluxos e automações de processos utilizando n8n."
                ],
            },
            {
                role: "Desenvolvedor de Sistemas Embarcados",
                company: "NUPEM (UNIFOR)",
                period: "Dez 2023 - Jul 2024",
                tasks: [
                    "Responsável por desenvolver um sistema de telemetria de dados para um vaporizador atmosfério utilizando microcontroladores ESP32, com comunicação via Wi-Fi, e integração com um aplicativo web para monitoramento em tempo real.",
                ],
            },
        ],
        education: [
            {
                degree: "Bacharelado em Ciência da Computação",
                institution: "UNIFOR",
                period: "2022.2-2026.2 (Em Andamento)",
            },
            {
                degree: "Curso de Programação FullStack",
                institution: "Alura",
                period: "2024.1-2025.1 (Concluído)",
            },
        ],
        languages: [
            { name: "Português", proficiency: "Nativo" },
            { name: "Inglês", proficiency: "Intermediário (B1)" },
        ],
        isDarkMode: false,
    },
    computed: {
        age() {
            const today = new Date();
            const birthDate = new Date(2003, 9, 24);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (
                monthDiff < 0 ||
                (monthDiff === 0 && today.getDate() < birthDate.getDate())
            ) {
                age--;
            }
            return age;
        },

        experienceDuration() {
            const today = new Date();
            const startDate = new Date(2023, 6, 1);
            console.log("Data de início:", startDate);
            let years = today.getFullYear() - startDate.getFullYear();
            let months = today.getMonth() - startDate.getMonth();
            if (today.getDate() < startDate.getDate()) {
                months--;
            }
            if (months < 0) {
                years--;
                months += 12;
            }
            const yearsStr =
                years > 0 ? years + (years === 1 ? " ano" : " anos") : "";
            const monthsStr =
                months > 0 ? months + (months === 1 ? " mês" : " meses") : "";
            if (years && months) {
                return yearsStr + " e " + monthsStr;
            } else if (years) {
                return yearsStr;
            } else if (months) {
                return monthsStr;
            } else {
                return "menos de 1 mês";
            }
        },
        computedProfileSummary() {
            return `Sou um desenvolvedor fullstack com ${this.experienceDuration} de experiência. Minha história com a programação começou cedo, movido pela curiosidade de criar bots usando Lua para jogar Tibia. Essa busca por entender como a tecnologia resolve problemas é o que me motiva hoje a trabalhar com tecnologia. Minhas principais stacks são React Native (Expo), Flutter, React (Next.js), Django e FastAPI.`;
        },
    },
    methods: {
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
            if (this.isDarkMode) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
            }
        },
        initTheme() {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                this.isDarkMode = savedTheme === "dark";
            } else {
                this.isDarkMode =
                    window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches;
            }

            if (this.isDarkMode) {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }
        },
    },
    mounted() {
        this.initTheme();
    },
});
