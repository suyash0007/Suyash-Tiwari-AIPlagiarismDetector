import React,{useCallback} from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

function Benifits() {
    const navigate=useNavigate()
    const handleNavigation = useCallback(() => {
        navigate('/detector');
    }, [navigate]);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl mt-10">
            <section className="mb-16">
                
                <div className="flex flex-col lg:flex-row gap-12 mb-16">
                    <div className="lg:w-1/2 flex flex-col items-center">
                    <h2 className="text-teal-700 text-4xl font-bold mb-4">BENEFITS</h2>
                        <h3 className="text-teal-800 text-5xl font-bold mb-6">For students</h3>
                        <p className="text-gray-600 mb-6 ">
                            Achieve outstanding papers effortlessly with our service. We go beyond
                            simply identifying instances of plagiarism in your work at no cost. Our
                            team of skilled editors is also available to provide the necessary
                            improvements, ensuring your paper reaches its full potential.
                        </p>
                        <ul className="space-y-6 list-disc pl-8 text-balance">
                            <li>
                                <h4 className="text-teal-700 text-xl font-semibold mb-2">Free plagiarism check & similarity scores</h4>
                                <p className="text-gray-600">
                                    Distinguish us from the rest of the plagiarism checkers by our commitment
                                    to a complimentary initial plagiarism detector service. With us, you can
                                    effortlessly evaluate the plagiarism scan results before making a decision
                                    on whether to invest in a comprehensive originality report. Unlike many
                                    others, we prioritize your satisfaction and provide transparency in the
                                    process.
                                </p>
                            </li>
                            <li>
                                <h4 className="text-teal-700 text-xl font-semibold mb-2">Text similarity report with sources</h4>
                                <p className="text-gray-600">
                                    With our plagiarism tool, you'll receive convenient source links that
                                    correspond to the highlighted sections in your document. These links
                                    enable you to carefully review and rectify any inappropriate quotations,
                                    words, or paraphrasing.
                                </p>
                            </li>
                            <li>
                                <h4 className="text-teal-700 text-xl font-semibold mb-2">Database of scholarly articles</h4>
                                <p className="text-gray-600">
                                    Alongside our expansive open database, we provide you with the option to
                                    cross-reference your files against our extensive collection of scholarly
                                    articles. Our database boasts over 80 million articles sourced from
                                    renowned academic publishers, ensuring comprehensive coverage and
                                    access to a wealth of scholarly knowledge.
                                </p>
                            </li>
                        </ul>
                        <Button onClick={handleNavigation} className="mt-8 bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-6 rounded-full items-center">
                            PLAGIARISM CHECKER FOR STUDENTS
                        </Button>
                    </div>
                    <div className="lg:w-1/2 lg:ml-6">
                        <img
                            src="/images/students.webp"
                            alt="Students using laptop"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section>

                <div className="flex flex-col lg:flex-row-reverse gap-8 ">
                    <div className="lg:w-1/2 flex flex-col items-center">
                        <h2 className="text-pink-300 text-4xl font-bold mb-4">BENEFITS</h2>
                        <h3 className="text-teal-800 text-5xl font-bold mb-6">For educators</h3>
                        <p className="text-gray-600 mb-6">
                            Embrace authenticity and originality as the defining qualities of your
                            teaching style. Count on our unwavering support as we provide you
                            with free, cutting-edge plagiarism prevention software. Together, lets
                            empower your students through education.
                        </p>
                        <ul className="space-y-6 list-disc pl-8 text-balance">
                            <li>
                                <h4 className="text-teal-700 text-xl font-semibold mb-2">Free plagiarism check & similarity scores</h4>
                                <p className="text-gray-600">
                                    Distinguish us from the rest of the plagiarism checkers by our commitment
                                    to a complimentary initial plagiarism detector service. With us, you can
                                    effortlessly evaluate the plagiarism scan results before making a decision
                                    on whether to invest in a comprehensive originality report. Unlike many
                                    others, we prioritize your satisfaction and provide transparency in the
                                    process.
                                </p>
                            </li>
                            <li>
                                <h4 className="text-teal-700 text-xl font-semibold mb-2">Text similarity report with sources</h4>
                                <p className="text-gray-600">
                                    With our plagiarism tool, you'll receive convenient source links that
                                    correspond to the highlighted sections in your document. These links
                                    enable you to carefully review and rectify any inappropriate quotations,
                                    words, or paraphrasing.
                                </p>
                            </li>
                            <li>
                                <h4 className="text-teal-700 text-xl font-semibold mb-2">Database of scholarly articles</h4>
                                <p className="text-gray-600">
                                    Alongside our expansive open database, we provide you with the option to
                                    cross-reference your files against our extensive collection of scholarly
                                    articles. Our database boasts over 80 million articles sourced from
                                    renowned academic publishers, ensuring comprehensive coverage and
                                    access to a wealth of scholarly knowledge.
                                </p>
                            </li>
                        </ul>
                        <Button onClick={handleNavigation} className="mt-8 bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-6 rounded-full">
                            PLAGIARISM CHECKER FOR EDUCATORS
                        </Button>
                    </div>
                    <div className="lg:w-1/2 mr-10">
                        <img
                            src="/images/educators.webp"
                            alt="Classroom interior"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
export default React.memo(Benifits)