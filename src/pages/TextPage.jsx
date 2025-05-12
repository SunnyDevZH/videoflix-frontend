import React from 'react';
import '../styles/pages/TextPage.module.css';

function TextPage() {
  return (
    <div className="text-page">
      <header className="text-page-header">
        <div className="logo">VIDEOFLIX</div>
        <button className="back-button">←</button>
      </header>
      <main className="text-page-content">
        <section className="text-section">
          <h1 className="title blue">Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper hendrerit tellus, eu aliquet dui sollicitudin a. Sed nunc dui, tempor non scelerisque ut, aliquam sit amet metus. Suspendisse ut erat tortor. Maecenas suscipit eleifend facilisis. Donec mollis vitae massa id imperdiet. Donec lobortis feugiat diam et tempor. Praesent malesuada felis vitae leo faucibus ultricies. Sed molestie mollis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eleifend sollicitudin diam, quis egestas risus maximus in.
          </p>
        </section>
        <section className="text-section">
          <h1 className="title">Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper hendrerit tellus, eu aliquet dui sollicitudin a. Sed nunc dui, tempor non scelerisque ut, aliquam sit amet metus. Suspendisse ut erat tortor.
          </p>
        </section>
        <section className="text-section">
          <h1 className="title">Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper hendrerit tellus, eu aliquet dui sollicitudin a. Sed nunc dui, tempor non scelerisque ut, aliquam sit amet metus. Suspendisse ut erat tortor. Maecenas suscipit eleifend facilisis. Donec mollis vitae massa id imperdiet. Donec lobortis feugiat diam et tempor. Praesent malesuada felis vitae leo faucibus ultricies. Sed molestie mollis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eleifend sollicitudin diam, quis egestas risus maximus in.
          </p>
        </section>
      </main>
    </div>
  );
}

export default TextPage;