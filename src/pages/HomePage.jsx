import "./HomePage.css";
import { useMemo, useState } from "react";
import { useEditor } from "../hooks/useEditor";
import businessPresentation from "../data/templates/businessPresentation.json";
import launchPresentation from "../data/templates/launchPresentation.json";
import onboardingPresentation from "../data/templates/onboardingPresentation.json";

const HomePage = () => {
  const { createNewPresentation, openPresentation } = useEditor();
  const [searchValue, setSearchValue] = useState("");

  const presentations = useMemo(
    () => [
      {
        id: 1,
        title: "Q4 Business Review",
        subtitle: "Performance & Growth Metrics",
        footerTitle: "Q4 Business Review",
        slidesCount: businessPresentation.slideset.slides.length,
        date: "Mar 31, 2026",
        theme: "light-purple",
        data: businessPresentation,
      },
      {
        id: 2,
        title: "Introducing Nova",
        subtitle: "The future of productivity",
        footerTitle: "Product Launch 2026",
        slidesCount: launchPresentation.slideset.slides.length,
        date: "Mar 31, 2026",
        theme: "dark-blue",
        data: launchPresentation,
      },
      {
        id: 3,
        title: "Welcome to the Team!",
        subtitle: "Everything you need to know",
        footerTitle: "Team Onboarding",
        slidesCount: onboardingPresentation.slideset.slides.length,
        date: "Mar 31, 2026",
        theme: "light",
        data: onboardingPresentation,
      },
    ],
    []
  );

  const filteredPresentations = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    if (!query) return presentations;

    return presentations.filter((presentation) => {
      return (
        presentation.title.toLowerCase().includes(query) ||
        presentation.footerTitle.toLowerCase().includes(query)
      );
    });
  }, [presentations, searchValue]);

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-header__left">
          <button className="home-header__menu" type="button">
            Edit
          </button>
          <button className="home-header__icon-button" type="button">
            🎨
          </button>
        </div>

        <div className="home-header__center">
          <div className="home-header__search-shell">
            <span className="home-header__refresh">⟳</span>
            <span className="home-header__search-placeholder">/</span>
            <span className="home-header__chevron">⌄</span>
          </div>
        </div>

        <div className="home-header__right">
          <button className="home-header__icon-button" type="button">
            🖥
          </button>
          <button className="home-header__icon-button" type="button">
            ⛶
          </button>
        </div>
      </header>

      <section className="home-topbar">
        <div className="home-brand">
          <div className="home-brand__logo">▣</div>
          <span className="home-brand__name">SlideForge</span>
        </div>

        <button
          className="home-topbar__button"
          type="button"
          onClick={createNewPresentation}
        >
          + New Presentation
        </button>
      </section>

      <main className="home-content">
        <section className="home-intro">
          <h1 className="home-intro__title">Your Presentations</h1>
          <p className="home-intro__subtitle">
            Create, edit, and present your slides with ease.
          </p>
        </section>

        <div className="home-search">
          <span className="home-search__icon">⌕</span>
          <input
            type="text"
            placeholder="Search presentations..."
            className="home-search__input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <section className="presentation-grid">
          {filteredPresentations.length > 0 ? (
            filteredPresentations.map((presentation) => (
              <button
                key={presentation.id}
                type="button"
                className="presentation-card"
                onClick={() => openPresentation(presentation.data)}
              >
                <div
                  className={`presentation-card__preview presentation-card__preview--${presentation.theme}`}
                >
                  <h3 className="presentation-card__preview-title">
                    {presentation.title}
                  </h3>
                  <p className="presentation-card__preview-subtitle">
                    {presentation.subtitle}
                  </p>
                </div>

                <div className="presentation-card__footer">
                  <h4 className="presentation-card__footer-title">
                    {presentation.footerTitle}
                  </h4>
                  <p className="presentation-card__footer-meta">
                    {presentation.slidesCount} slides · {presentation.date}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <p className="home-empty-state">No presentations found.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default HomePage;