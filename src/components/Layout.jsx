function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1>SIGO-GN · Unidad 23</h1>
      </header>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}

export default Layout;