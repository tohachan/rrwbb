import React from "react";
import "./main_page.scss";

import {
    FaReact,
    FaNodeJs,
    FaSass,
    FaTh,
    FaProjectDiagram,
    FaAngleLeft,
    FaGoogle,
    FaExclamationTriangle,
    FaGlobe,
    FaHandPointRight,
    FaCode,
} from "react-icons/fa";

// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyImage } from "react-lazy-images";

import { FormattedMessage } from 'react-intl';

function Main () {
    return (
        <React.Fragment>
            <section className="hero is-info page-main__head">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1">
                            RRWBB
                        </h1>
                        <h1 className="title is-2">
                            <FormattedMessage
                                id="main.title"
                                defaultMessage="Default message"
                                />
                        </h1>
                        <h2 className="title subtitle is-3">
                            For another project
                        </h2>
                        <h2 className="subtitle">
                            React 16.8.6 | redux | Webpack 4 | Babel 7 | Bulma
                        </h2>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-2">What is this?</h2>

                    <p className="m-b-lg">This is a starter pack for build front end application of any (probably) complexity.</p>
                </div>
                <div className="container">
                    <h2 className="title is-2">Why you might need this?</h2>

                    <p className="m-b-lg">Because it can save a lot of time when you need to start your next project.</p>
                </div>
                <div className="container">
                    <h2 className="title is-2">Motivation</h2>

                    <p>My goal was to create setup for future project without too much of "black box" solutions and with support of all requred features for production.</p>
                    <p>I mostly borrow all the ideas from all around the Internet and put them all together.</p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-2">Features</h2>

                    <div className="box features">
                        <ul className="features__list">
                            <li>
                                <p>
                                    <FaReact /> <strong>React</strong>
                                </p>
                                <p className="p-l-lg">
                                    16.8.6 With hooks support
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaReact /> <strong>Redux with persist support</strong>
                                </p>
                                <p className="p-l-lg">
                                    Persist fore some crutial states
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaReact /> <strong>Redux saga with data-preload on server side</strong>
                                </p>
                                <p className="p-l-lg">
                                    For manageable side effects
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaReact /> <strong>React router connected to redux</strong>
                                </p>
                                <p className="p-l-lg">
                                    For better history experience
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaReact /> <strong>Reducer and saga injectors</strong>
                                </p>
                                <p className="p-l-lg">
                                    Logic (and code!) around store can grow very fast, so i wanted to exclude it from main bundle.
                                    It is also a good idea to not overwhelm all pages with all saga watchers.
                                    This logic mostly taken from react-boilerplate.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaProjectDiagram /> <strong>Code splitting with @loadable/component</strong>
                                </p>
                                <p className="p-l-lg">
                                    Simple as it is: reduce main bundle size. We can also prefetch/preload components for better user experience.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaNodeJs /> <strong>SSR with code splitting support</strong>
                                </p>
                                <p className="p-l-lg">
                                    For better SEO support
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaGlobe /> <strong>i18n</strong>
                                </p>
                                <p className="p-l-lg">
                                    With separate json loading for every language<br />
                                    <span className="has-background-warning"><FaExclamationTriangle />Right now it's not really feature-loaded, but works</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaNodeJs /> <strong>Dev server with HMR</strong>
                                </p>
                                <p className="p-l-lg">
                                    Run by webpack-[dev|hot|hot-server]-middlewares for fast and convenient development<br />
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaAngleLeft /> <strong>Helmet</strong>
                                </p>
                                <p className="p-l-lg">
                                    For better SEO support
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaSass /> <strong>Scss with code splitting support</strong>
                                </p>
                                <p className="p-l-lg">
                                    For styling. Code splitting helps with css size optimization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaTh /> <strong>Css load optimization</strong>
                                </p>
                                <p className="p-l-lg">
                                    <span>Even this bundle uses Bulma with several components imported, main .css file size is around ~20Kb without gzip (around ~170Kb without purge css).</span><br />
                                    <span className="has-background-warning"><FaExclamationTriangle />Purge css is disabled in dev mode</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-2">Performance</h2>

                    <div className="box features">
                        <ul className="features__list">
                            <li>
                                <p>
                                    <FaGoogle /> <strong>Pass Google Lighthouse with green scores</strong>
                                </p>

                                <div>
                                    <LazyImage
                                        src="/images/lh_score.png"
                                        alt="Lighthouse score"
                                        placeholder={({ imageProps, ref }) => (
                                            <img ref={ref} src="https://via.placeholder.com/732x396.png" alt={imageProps.alt} />
                                        )}
                                        actual={({ imageProps }) => <img {...imageProps} />}
                                    />
                                </div>

                                <p className="m-b-lg">Using just $5/mo drpolet on Digitalocean and free Cloudflare service</p>
                            </li>

                            <li>
                                <p>
                                    <FaCode /> <strong>Low rate of unused code</strong>
                                </p>

                                <div>
                                    <LazyImage
                                        src="/images/used_code.png"
                                        alt="Lighthouse score"
                                        placeholder={({ imageProps, ref }) => (
                                            <img ref={ref} src="https://via.placeholder.com/1194x170.png" alt={imageProps.alt} />
                                        )}
                                        actual={({ imageProps }) => <img {...imageProps} />}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-2">TODO</h2>

                    <div className="box features">
                        <ul className="features__list">
                            <li>
                                <p>
                                    <FaHandPointRight /> <strong>Test coverage</strong>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaHandPointRight /> <strong>Add storybook</strong>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaHandPointRight /> <strong>Separate SPA build html file for JAMStack deployment</strong>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaHandPointRight /> <strong>Close to real world i18n usage</strong>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaHandPointRight /> <strong>More sample pages</strong>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaHandPointRight /> <strong>Better requests handler</strong>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-2">Usage</h2>

                    <p>Install: </p>
                    <pre className="m-b-md">npm i</pre>

                    <p>Start dev server: </p>
                    <pre className="m-b-md">npm run dev</pre>

                    <p>Build and start prod server: </p>
                    <pre className="m-b-md">npm run prod</pre>

                    <p>Build and analyze bundle size: </p>
                    <pre className="m-b-md">npm run analyze</pre>

                    <p>Build without start: </p>
                    <pre className="m-b-md">npm run build</pre>

                    <p>Separate start command (should build first): </p>
                    <pre className="m-b-md">npm run start:prod</pre>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Main;
