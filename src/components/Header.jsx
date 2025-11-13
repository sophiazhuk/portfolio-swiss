import React from "react";
import styles from "./Header.module.css";

const Header = ({ setActiveSection, activeSection }) => {
  const navItems = [
    { id: "Sophia", label: "ophia", color: "red" },
    { id: "About", label: "bout", color: "cyan" },
    { id: "Projects", label: "rojects", color: "green" },
    { id: "Contact", label: "ontact", color: "yellow" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>{/* reserved for future */}</div>
      <nav className={styles.navHeader}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                aria-label={`Go to ${item.id} section`}
                className={`${styles.bubble} ${styles[item.color] || ""} ${activeSection === item.id ? styles.selected : ""}`}
                onClick={() => setActiveSection(item.id)}
              >
                <span
                  className={styles.bubbleText}
                  data-hover={item.label}
                  aria-hidden="true"
                >
                  {item.id.charAt(0).toUpperCase()}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
