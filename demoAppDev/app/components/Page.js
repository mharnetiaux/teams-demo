import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

function Page({children,location: {state,},}) {

    const cx = classNames({
        page: true,
        'page--prev': state && state.prev,
    });

    return (

        <section className={cx}>
            <div className="page__inner">
                {children}
            </div>
        </section>
    );
}


export default withRouter(Page);