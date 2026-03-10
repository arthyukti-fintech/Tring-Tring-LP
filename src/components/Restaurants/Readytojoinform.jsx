import React from 'react'

function Readytojoinform({ref}) {
    return (
        <section
            ref={ref}
            className="px-6 md:px-12 lg:px-16 py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl mb-4 text-center">
                    Ready to Join?
                </h2>
                <p className="section-sub text-center mb-10">
                    Fill out the form below and we’ll get back to you within 24 hours.
                </p>

                <form className="glass-card p-8 rounded-xl space-y-6">
                    {/* (form fields unchanged) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-black/80">
                                Restaurant Name *
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Golden Dragon"
                                className="form-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-black/80">
                                Owner/Manager Name *
                            </label>
                            <input
                                type="text"
                                placeholder="Full name"
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-black/80">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                placeholder="you@restaurant.com"
                                className="form-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-black/80">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                placeholder="+1 234 567 890"
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-black/80">
                            Restaurant Address *
                        </label>
                        <input
                            type="text"
                            placeholder="Street, city, zip code"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-black/80">
                                Cuisine Type *
                            </label>
                            <select className="form-input" required defaultValue="">
                                <option value="" disabled>Select cuisine</option>
                                <option value="italian">Italian</option>
                                <option value="chinese">Chinese</option>
                                <option value="indian">Indian</option>
                                <option value="mexican">Mexican</option>
                                <option value="american">American</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-black/80">
                                How did you hear about us?
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Google, friend"
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-black/80">
                            Additional Information (optional)
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Tell us anything else you'd like us to know..."
                            className="form-input resize-none"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="submit-btn">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Readytojoinform
