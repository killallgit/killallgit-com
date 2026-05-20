export default function Home() {
  return (
    <div className="page">
      <h1>Kill. All. Git.</h1>
      <p style={{ textAlign: "center" }}>
        <i>Software</i>
      </p>

      <nav className="main">
        <a href="#home">Home</a> |{" "}
        <a href="#products">Projects</a> |{" "}
        <a href="#about">Blog</a> |{" "}
        <a href="#contact">Contact</a>
      </nav>

      <hr />

      <table className="layout">
        <tbody>
          <tr>
            <td>
              <h2 id="home">Welcome</h2>
              <p>
                Welcome to the home page.
                We are a software company specializing in internet solutions.
              </p>
              <p>
                Founded in 2001, we have helped two or three small and
                mid-sized businesses bring their operations onto the
                computer.
              </p>

              <h2 id="products">Our Products</h2>
              <ul>
                <li>
                  <b>Band website</b> — A complete band website for my friend Kevin.
                </li>
                <li>
                  <b>Invoice Pro</b> — An HTML form to print the form.
                </li>
                <li>
                  <b>Road trip gallery</b> — Family road-trip gallery of photos with CSS and animated fade-in. Grandma talks about it still.
                </li>
                <li>
                  <b>Custom Development</b> — We build software to your
                  specifications, on time and on budget.
                </li>
              </ul>

              <h2 id="about">About Us</h2>
              <p>
                Our team of programmers has over 25 combined years of
                experience in C, C++, Visual Basic, and SQL. We pride
                ourselves on writing reliable software and standing
                behind every product we ship.
              </p>

              <h2 id="contact">Contact</h2>
              <p>
                KillAllGit Software Solutions<br />
                1606 Northstar Dr<br />
                Petaluma, USA 94954
              </p>
              <p>
                Telephone: (971) 238-4475<br />
                Fax: (971) 238-4475<br />
                E-mail:{" "}
                <a href="mailto:info@killallgit.com">info@killallgit.com</a>
              </p>
            </td>

            <td className="sidebar">
              <h2 style={{ marginTop: 0 }}>News</h2>
              <p>
                <b>May 2002</b> — InvoicePro 2.0 now shipping! Free
                upgrade for registered users of version 1.x.
              </p>
              <p>
                <b>May 2026</b> — We are pleased to announce our new
                home page on the World Wide Web!
              </p>

              <h2>Office Hours</h2>
              <p>
                Monday – Friday<br />
                9:00 AM – 5:00 PM
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <footer>
        <hr />
        Copyright &copy; 1996 KillAllGit Software Solutions. All rights
        reserved.
      </footer>
    </div>
  );
}
