import React from 'react';

import NoSsrChunk from 'shared/containers/pages/LoadablePage/NoSsrChunkLoader';

import './loadable_page.scss';

function LoadablePage () {
    return (
        <section className="section loadable-page">
            <div className="container">
                <h2 className="title is-2">Loadable page</h2>

                <p>This page is loadable.</p>
                <p>It is not included in main bundle.</p>
                <p>It will be loaded on demand by route /dynamic-page with ./loadable_page.scss styles.</p>
                <p className="m-b-xl">It can be preloaded on Nav link hover.</p>

                <div className="box">
                    <h3 className="title">Static data from loadable components</h3>
                    <h4 className="title subtitle">This data will be <strong>outside</strong> container chunk and <strong>not</strong> preloaded by server</h4>
                    <h4 className="subtitle">Can use this if content is not important for SEO</h4>
                    <NoSsrChunk />
                    <NoSsrChunk />
                    <hr/>

                    <h3 className="title">Static data from inside container</h3>
                    <h4 className="subtitle">This data will be inside container chunk and preloaded by server</h4>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto ea cumque voluptate maxime? Porro autem placeat illo dolores, sit nam repellendus vero rem nulla in laudantium cum. Praesentium, sequi.</div>
                </div>
            </div>
        </section>
    );
}

export default LoadablePage;
