/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                main: {
                    primary: "#191a19",
                    secondary: "#1c1e1c",
                    green: "#5ded8e",
                    font: "#e1e1e1",
                    font2: "#acacac",
                    gray: "#383838",
                },
            },
            gridTemplateColumns: {
                layout: "16rem 5fr 20rem",
            },
            gridTemplateRows: {
                layout: "1fr 10rem",
            },
        },
    },
    plugins: [],
};