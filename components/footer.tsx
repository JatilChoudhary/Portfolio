export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-muted-foreground">
          {'> '} Jatil Choudhary &copy; {new Date().getFullYear()}
        </p>
        <p className="text-xs font-mono text-muted-foreground">
          Securing the digital frontier, one system at a time.
        </p>
      </div>
    </footer>
  )
}
