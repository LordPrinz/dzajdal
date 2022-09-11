/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                main: {
                    primary: "#1a1a1a",
                    secondary: "#1f1f1f",
                    green: "#88dea5",
                    font: "#e7ede2",
                },
            },
            gridTemplateColumns: {
                layout: "18rem 6fr 18rem",
            },
            gridTemplateRows: {
                layout: "1fr 12rem",
            },
        },
    },
    plugins: [],
};