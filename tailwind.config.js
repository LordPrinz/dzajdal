/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                main: {
                    primary: "#1a1a1a",
                    secondary: "#1c1e1b",
                    green: "#88dea5",
                    font: "#e7ede2",
                },
            },
        },
    },
    plugins: [],
};