function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-300 p-3 text-center">
            <p className="m-0 text-gray-600">© {year} @adarsh</p>
        </footer>
    );
}

export default Footer;