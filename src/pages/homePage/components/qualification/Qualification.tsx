import { useState } from 'react';
import './aqualification.css';

export const Qualification = () => {

    const [toggleState, setToggleState] = useState<number>(1);

    const toggleTab = (index: number) => {
        setToggleState(index)
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={() => toggleTab(1)} className={`${toggleState === 1 && 'qualification__active'} qualification__button button--flex`}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div onClick={() => toggleTab(2)} className={`${toggleState === 2 && 'qualification__active'} qualification__button button--flex`}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={`${toggleState === 1 && 'qualification__content-active'} qualification__content`}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2024
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>

                    </div>
                </div>


                <div className={`${toggleState === 2 && 'qualification__content-active'} qualification__content`}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Designer</h3>
                            <span className="qualification__subtitle">Microsoft - Spain</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Apple Inc - Spain</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2024
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web designer</h3>
                            <span className="qualification__subtitle">Figma - Spain</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
