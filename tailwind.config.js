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
                    font: "#d2d2d2",
                    font2: "#acacac",
                    gray: "#383838",
                },
            },
            gridTemplateColumns: {
                layout: "17rem 5fr 22rem",
            },
            gridTemplateRows: {
                layout: "1fr 11rem",
            },
        },
    },
    plugins: [],
};