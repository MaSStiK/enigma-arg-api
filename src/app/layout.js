export const metadata = {
    title: "Квест Энигмы",
    description: `ARG для сервера "Новая жизнь" от таинственного организатора по имени Энигма`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                {children}
            </body>
        </html>
    );
}
