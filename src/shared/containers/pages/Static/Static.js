/**
 * Example of static page
 * this page will be imported directly by Router and included in the main bundle
 */

import React from 'react';

function Static () {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title is-2">Static page</h2>

                <p>This page is static.</p>
                <p>Directly imported from Router. Which means it will be included in the main bundle</p>
            </div>
        </section>
    );
}

export default Static;
