function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-slate-600">
          © {currentYear} Flex Industrial. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;