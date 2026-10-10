/* Main Application Logic - Ma'am Faria Portfolio */

// Data Store for Projects Modal details
const projectDetails = {
    'proj-masters': {
        title: "AI-Enabled Cardiovascular Disease Detection & Monitoring System",
        category: "Master's Final Project (Riphah International University)",
        duration: "02/2024 - 03/2025",
        role: "Lead Researcher / Master's Scholar",
        image: "images/AI-Enabled Cardiovascular Disease Detection & Monitoring System/Research_Data_Access_Training_Guide.png",
        imageCaption: "MIMIC-III Clinical Database Access Architecture & Research Training Protocol",
        summary: "An end-to-end non-invasive AI healthcare platform integrating continuous blood glucose estimation via PPG signals and clinical credentialed data mining for high-risk cardiovascular classification.",
        dataset: "MIMIC-III Credentialed Database (Access authorized under MIT CITI Program Ethics Credential). Extracted physiological parameters including blood glucose, HbA1c, blood pressure, and continuous PPG waveforms.",
        tech: ["Python", "MATLAB", "MIMIC-III", "PPG Signal Processing", "Machine Learning / Deep Learning", "Continuous Non-Invasive Glucose Estimation"],
        highlights: [
            "Extracted and preprocessed complex ICU clinical parameters from MIMIC-III database.",
            "Designed non-invasive PPG blood glucose estimation model to eliminate painful finger-pricks.",
            "Built predictive machine learning models to identify high-risk cardiovascular patients with co-morbid diabetes.",
            "Successfully completed CITI Program ethics compliance for MIT clinical database access."
        ],
        linkText: "Verify CITI Ethics Credential",
        linkUrl: "https://www.citiprogram.org/verify/?kbce18feb-7eb8-47c8-92b0-82a21d792edd-6052728"
    },
    'proj-bachelors': {
        title: "Cost-Effective & Smart Framework for Remote Health Monitoring",
        category: "Bachelor's Final Project (UET Lahore)",
        duration: "Fall 2020 - Spring 2021",
        role: "Lead Developer / Researcher",
        image: "images/Cost-Effective & Smart Framework for Remote Health Monitoring/Personalized_Cardiac_Monitoring_IoT_Framework.png",
        imageCaption: "Personalized Cardiac Arrhythmia Telemetry & IoT Cloud Classification Architecture",
        summary: "A complete bio-signal acquisition and remote telemetry framework for real-time ECG arrhythmia classification using digitized hardware and web monitoring.",
        dataset: "PhysioNet Public Arrhythmia Database combined with digitized healthy volunteer ECG telemetry.",
        tech: ["MATLAB", "Arduino Hardware", "PhysioNet", "Machine Learning", "Web Telemetry Dashboard", "Bio-Signal Conditioning"],
        highlights: [
            "Won 2nd Position in Undergraduate Poster Competition at iCBME & iMEDiTEC (UTM Malaysia, June 2021).",
            "Shortlisted for funding by National Grassroots ICT Research Initiative (Ignite 2020-2021).",
            "Built physical Arduino ECG signal digitization circuit and interfaced with MATLAB for real-time noise filtering.",
            "Developed remote web dashboard for real-time physician monitoring."
        ],
        linkText: "UTM iMEDiTEC Conference & Ignite Grant Info",
        linkUrl: "https://ignite.org.pk/national-grassroots-research-initiative"
    },
    'proj-eeg-bci': {
        title: "Closed-Loop EEG-Driven BCI for Exoskeleton Arm Control & Motor Rehabilitation",
        category: "Supervised Research Project (Superior University)",
        duration: "02/2026 - Present",
        role: "Project Supervisor",
        image: "images/Closed-Loop EEG-Driven BCI for Exoskeleton Arm Control & Motor Rehabilitation/Real-Time_BCI_Rehabilitation_System.png",
        imageCaption: "Closed-Loop Real-Time EEG BCI Signal Acquisition, Feature Extraction & Exoskeleton Control Schematic",
        summary: "A real-time brain-computer interface system using high-precision EEG analog front-end and ESP32 embedded AI decoding for robotic arm rehabilitation.",
        dataset: "Custom non-invasive scalp EEG motor imagery recordings (C3/C4/Cz channels).",
        tech: ["ADS1299 EEG AFE", "ESP32 Embedded AI", "Brain-Computer Interface (BCI)", "Motor Imagery Decoding", "Closed-Loop Control"],
        highlights: [
            "Integrated Texas Instruments ADS1299 biopotential acquisition board for 24-bit low-noise EEG recording.",
            "Deployed micro-AI neural classifier directly onto ESP32 microcontroller for sub-50ms decoding latency.",
            "Created closed-loop haptic and motor feedback for continuous stroke rehabilitation assistance."
        ]
    },
    'proj-brain-tumor': {
        title: "AI-Assisted Brain Tumor Detection & Thermal Ablation Simulation Framework",
        category: "Supervised Research Project (Superior University)",
        duration: "01/2026 - Present",
        role: "Project Supervisor",
        image: "images/AI-Assisted Brain Tumor Detection & Thermal Ablation Simulation Framework/AI_Brain_Tumor_COMSOL_Simulation.jpg",
        imageCaption: "Deep Learning MRI Preprocessing & COMSOL Multiphysics Thermal Ablation Bioheat Simulation",
        summary: "Combines CNN-based MRI tumor diagnosis (82.57% accuracy) with COMSOL Multiphysics bioheat transfer modeling for non-invasive treatment planning.",
        dataset: "Preprocessed MRI neuroimaging dataset with heavy data augmentation and contrast normalization.",
        tech: ["COMSOL Multiphysics", "Python / PyTorch", "CNN Tumor Classification", "Bioheat Modeling", "MRI Processing"],
        highlights: [
            "Achieved 82.57% accuracy on multi-class brain tumor classification (glioma, meningioma, pituitary).",
            "Automated tumor contour localization and exported spatial coordinates into COMSOL simulation environment.",
            "Simulated thermal ablation probe bioheat distribution (Pennes Bioheat Equation) to evaluate safe thermal dosages."
        ]
    },
    'proj-radiation': {
        title: "Centralized Radiation & Environmental Hazard Monitoring Device",
        category: "Supervised FYP Research (Superior University)",
        duration: "01/2025 - 12/2025",
        role: "Project Supervisor",
        image: "images/Centralized Radiation & Environmental Hazard Monitoring Device/environmental_monitoring_system_infographic.png",
        imageCaption: "Centralized Radiation & Environmental Hazard Monitoring System — BPW34 PIN Photodiode Sensing Node",
        summary: "Innovated a ultra-low-cost radiation detection node using BPW34 PIN photodiode sensor replacing expensive Geiger-Muller tubes.",
        dataset: "Environmental gamma/beta ionizing radiation counts and ambient sensor telemetries.",
        tech: ["BPW34 PIN Photodiode", "Cloud IoT", "Embedded C++", "Regulatory Compliance", "Automated Safety Alerts"],
        highlights: [
            "Designed low-noise transimpedance amplifier to detect particle radiation using affordable BPW34 PIN photodiodes.",
            "Built real-time IoT cloud alerting system with automated compliance logging for hospital radiation safety.",
            "Reduced hardware cost by 80% compared to traditional Geiger-Muller monitoring systems."
        ]
    },
    'proj-telesurgery': {
        title: "Embedded Mechatronic System for Robotic Tele-Surgery",
        category: "Supervised FYP Research (Superior University)",
        duration: "01/2025 - 12/2025",
        role: "Project Supervisor",
        image: "images/Embedded Mechatronic System for Robotic Tele-Surgery/WhatsApp Image 2026-10-03 at 11.00.38 PM.jpeg",
        imageCaption: "Embedded Mechatronic Robotic Tele-Surgery Hardware Prototype & Wireless Master-Slave Platform",
        summary: "Low-cost (<$500 USD) modular master-slave robotic teleoperation platform with real-time computer vision guidance and sub-200ms wireless control latency.",
        dataset: "Real-time stereo camera surgical field video stream and 6-DOF master arm kinematic encoders.",
        tech: ["Mechatronics & Robotics", "Sub-200ms Teleoperation", "Computer Vision", "Embedded AI Guidance", "Low-Cost Medical Hardware"],
        highlights: [
            "Built 6-DOF master-slave robotic arm tele-operation setup with ultra-low latency wireless protocol.",
            "Integrated OpenCV AI object detection for spatial guidance and tremor-filtering algorithms.",
            "Total build cost under USD $500, enabling accessible surgical simulation training in LMIC settings."
        ]
    },
    'proj-hydrogel': {
        title: "Smart Biopolymer (Alginate Hydrogel) for Controlled Drug Release",
        category: "Supervised Research Project",
        duration: "2024 - 2025",
        role: "Project Supervisor",
        image: "images/Smart Biopolymer (Alginate Hydrogel) for Controlled Drug Release/Smart_Biopolymer_Hydrogel_Drug_Release.jpg",
        imageCaption: "Temperature-Responsive Alginate Hydrogel Formulation & Controlled Drug Delivery Release Kinetics",
        summary: "Temperature-responsive smart hydrogel formulation for targeted 37°C hyperthermic drug delivery kinetics.",
        dataset: "UV-Vis Spectrophotometry drug release concentration curves across temperatures (25°C vs 37°C).",
        tech: ["Biomaterial Synthesis", "Alginate Hydrogels", "Release Kinetics", "Spectrophotometry", "Tissue Engineering"],
        highlights: [
            "Synthesized calcium-alginate crosslinked biopolymer hydrogels with thermal sensitivity.",
            "Demonstrated accelerated drug release at body temperature (37°C) compared to baseline room temperature (25°C).",
            "Validated release kinetics modeling for targeted oncological and localized anti-inflammatory therapies."
        ]
    },
    'proj-rehab-suite': {
        title: "Musculoskeletal Biomechanics & Rehabilitation Device Suite",
        category: "Supervised Semester Research Suite",
        duration: "2024 - 2025",
        role: "Project Supervisor",
        image: "images/Musculoskeletal Biomechanics & Rehabilitation Suite/Smart_Rehabilitation_Tech_Prototypes.png",
        imageCaption: "Smart Rehabilitation Tech Prototypes: Smart Knee Brace, EMG Fatigue Monitor & Mayo Voice Arm",
        summary: "A tri-fold suite of orthopedic and neuromuscular devices: Smart Knee Brace, EMG Muscle Fatigue Monitor, and Mayo Voice-Controlled Flex Arm.",
        dataset: "Surface EMG spectral fatigue signals (median frequency shift) & joint goniometer angles.",
        tech: ["EMG Spectral Analysis", "Biomechanical Sensors", "Prosthetic Mechatronics", "Voice Control System", "Orthopedic Devices"],
        highlights: [
            "Smart Knee Brace: Real-time joint load and angle tracking wearable.",
            "Muscle Fatigue Monitoring: EMG Fast Fourier Transform (FFT) median frequency shift detector.",
            "Mayo Voice Flex Arm: Voice-activated prosthetic mechanism for upper limb mobility assistance."
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Navigation Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Navbar Scroll Highlight & Glass Shift
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2');
        }
    });

    // 3. Project Filter Tabs & Search
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const searchInput = document.getElementById('project-search');
    const projectCards = document.querySelectorAll('.project-card');

    function filterProjects() {
        const activeFilter = document.querySelector('.project-filter-btn.active')?.dataset.filter || 'all';
        const searchTerm = (searchInput?.value || '').toLowerCase().trim();

        projectCards.forEach(card => {
            const category = card.dataset.category || '';
            const title = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
            const desc = (card.querySelector('.card-desc')?.textContent || '').toLowerCase();
            const tags = (card.querySelector('.card-tags')?.textContent || '').toLowerCase();

            const matchesCategory = (activeFilter === 'all' || category.includes(activeFilter));
            const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm) || tags.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden-card');
            } else {
                card.classList.add('hidden-card');
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40'));
            btn.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
            filterProjects();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }

    // 4. Modal Handler for Project Details
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');

    document.querySelectorAll('.open-project-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projId = btn.dataset.projectId;
            const data = projectDetails[projId];
            if (!data) return;

            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-category').textContent = data.category;
            document.getElementById('modal-duration').textContent = data.duration;
            document.getElementById('modal-role').textContent = data.role;
            document.getElementById('modal-summary').textContent = data.summary;
            document.getElementById('modal-dataset').textContent = data.dataset;

            // Tech badges
            const techContainer = document.getElementById('modal-tech');
            techContainer.innerHTML = data.tech.map(t => `<span class="badge-tech">${t}</span>`).join('');

            // Highlights
            const highlightsContainer = document.getElementById('modal-highlights');
            highlightsContainer.innerHTML = data.highlights.map(h => `<li class="flex items-start"><i class="fas fa-check-circle text-emerald-400 mr-2 mt-1 flex-shrink-0"></i><span>${h}</span></li>`).join('');

            // External Link
            const linkContainer = document.getElementById('modal-link-container');
            if (data.linkUrl) {
                linkContainer.innerHTML = `<a href="${data.linkUrl}" target="_blank" class="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all font-semibold text-sm"><i class="fas fa-external-link-alt mr-2"></i> ${data.linkText || 'View Verification / Output'}</a>`;
                linkContainer.classList.remove('hidden');
            } else {
                linkContainer.innerHTML = '';
                linkContainer.classList.add('hidden');
            }

            // Project Image & Schematic
            const imgSection = document.getElementById('modal-image-section');
            const imgElem = document.getElementById('modal-image');
            const imgCaption = document.getElementById('modal-image-caption');
            if (data.image && imgSection && imgElem) {
                imgElem.src = data.image;
                imgElem.alt = data.title;
                if (imgCaption) imgCaption.textContent = data.imageCaption || data.title;
                imgSection.classList.remove('hidden');
            } else if (imgSection) {
                imgSection.classList.add('hidden');
                if (imgElem) imgElem.src = '';
            }

            projectModal.classList.remove('hidden');
            projectModal.classList.add('flex');
        });
    });

    if (modalClose && projectModal) {
        modalClose.addEventListener('click', () => {
            projectModal.classList.add('hidden');
            projectModal.classList.remove('flex');
        });
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.classList.add('hidden');
                projectModal.classList.remove('flex');
            }
        });
    }

    // Lightbox modal handlers for viewing high-res project diagrams
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const modalImageWrapper = document.getElementById('modal-image-wrapper');

    function openLightbox() {
        const modalImg = document.getElementById('modal-image');
        if (!modalImg || !modalImg.src || !lightboxModal) return;
        if (lightboxImg) lightboxImg.src = modalImg.src;
        if (lightboxCaption) {
            lightboxCaption.textContent = document.getElementById('modal-image-caption')?.textContent || modalImg.alt || '';
        }
        lightboxModal.classList.remove('hidden');
        lightboxModal.classList.add('flex');
    }

    if (modalImageWrapper) {
        modalImageWrapper.addEventListener('click', openLightbox);
    }

    if (lightboxClose && lightboxModal) {
        lightboxClose.addEventListener('click', () => {
            lightboxModal.classList.add('hidden');
            lightboxModal.classList.remove('flex');
        });
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.add('hidden');
                lightboxModal.classList.remove('flex');
            }
        });
    }

    // 5. CV Modal View Handler
    const cvModal = document.getElementById('cv-modal');
    const openCvBtn = document.getElementById('open-cv-modal');
    const closeCvBtn = document.getElementById('close-cv-modal');

    if (openCvBtn && cvModal) {
        openCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cvModal.classList.remove('hidden');
            cvModal.classList.add('flex');
        });
    }
    if (closeCvBtn && cvModal) {
        closeCvBtn.addEventListener('click', () => {
            cvModal.classList.add('hidden');
            cvModal.classList.remove('flex');
        });
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) {
                cvModal.classList.add('hidden');
                cvModal.classList.remove('flex');
            }
        });
    }

    // 6. Interactive Lab Controls Handler
    const labSignalSelect = document.getElementById('lab-signal-type');
    const labBpmSlider = document.getElementById('lab-bpm');
    const labBpmVal = document.getElementById('lab-bpm-val');
    const labNoiseSlider = document.getElementById('lab-noise');
    const labNoiseVal = document.getElementById('lab-noise-val');
    const labStatPrimary = document.getElementById('lab-stat-primary');
    const labStatSecondary = document.getElementById('lab-stat-secondary');

    if (labSignalSelect) {
        labSignalSelect.addEventListener('change', (e) => {
            const type = e.target.value;
            if (window.labSim) window.labSim.setSignalType(type);
            updateLabStats(type);
        });
    }

    if (labBpmSlider) {
        labBpmSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            if (labBpmVal) labBpmVal.textContent = val;
            if (window.labSim) window.labSim.setBpm(val);
        });
    }

    if (labNoiseSlider) {
        labNoiseSlider.addEventListener('input', (e) => {
            const val = (e.target.value / 100).toFixed(2);
            if (labNoiseVal) labNoiseVal.textContent = val;
            if (window.labSim) window.labSim.setNoise(val);
        });
    }

    function updateLabStats(type) {
        if (!labStatPrimary || !labStatSecondary) return;
        if (type === 'ECG') {
            labStatPrimary.innerHTML = '<span class="text-xs text-gray-400">Cardiovascular Rhythm:</span> <span class="text-emerald-400 font-bold">Sinus Rhythm (Normal)</span>';
            labStatSecondary.innerHTML = '<span class="text-xs text-gray-400">Arrhythmia Detection AI:</span> <span class="text-cyan-400 font-bold">Low Risk (MIMIC-III Classifier)</span>';
        } else if (type === 'PPG') {
            labStatPrimary.innerHTML = '<span class="text-xs text-gray-400">Non-Invasive Glucose Est:</span> <span class="text-cyan-400 font-bold">104 mg/dL (Estimated)</span>';
            labStatSecondary.innerHTML = '<span class="text-xs text-gray-400">SpO2 Pulse Index:</span> <span class="text-emerald-400 font-bold">98.5% Normative</span>';
        } else if (type === 'EEG') {
            labStatPrimary.innerHTML = '<span class="text-xs text-gray-400">BCI Band Power:</span> <span class="text-violet-400 font-bold">Alpha Wave (10.2 Hz Active)</span>';
            labStatSecondary.innerHTML = '<span class="text-xs text-gray-400">Exoskeleton Command:</span> <span class="text-emerald-400 font-bold">Flexion State (ADS1299)</span>';
        } else if (type === 'EMG') {
            labStatPrimary.innerHTML = '<span class="text-xs text-gray-400">Muscle Fatigue Index:</span> <span class="text-amber-400 font-bold">Normal Muscle Tone (FFT Shift 0.0)</span>';
            labStatSecondary.innerHTML = '<span class="text-xs text-gray-400">Prosthetic Activation:</span> <span class="text-cyan-400 font-bold">Grasp Trigger (Mayo Voice)</span>';
        }
    }

    // 7. Contact Form Submission Toast Mock
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast("Thank you! Message sent to Engr. Faria successfully.", "success");
            contactForm.reset();
        });
    }

    // 8. Toast Helper
    window.showToast = function(msg, type = "info") {
        const toast = document.createElement('div');
        toast.className = `fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl backdrop-blur-xl border text-sm font-semibold flex items-center gap-3 transition-all transform translate-y-10 opacity-0 ${
            type === 'success' ? 'bg-emerald-900/90 border-emerald-500/50 text-emerald-200' : 'bg-cyan-900/90 border-cyan-500/50 text-cyan-200'
        }`;
        toast.innerHTML = `<i class="${type === 'success' ? 'fas fa-check-circle text-emerald-400' : 'fas fa-info-circle text-cyan-400'}"></i><span>${msg}</span>`;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('translate-y-10', 'opacity-0');
        }, 50);

        setTimeout(() => {
            toast.classList.add('translate-y-10', 'opacity-0');
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    };

    // 9. Publications & Citations Handlers
    const publicationsData = {
        'pub-1': {
            title: "A Diagnosis-Independent Severity Phenotype in Cardiovascular Admissions Using Unsupervised Machine Learning and Survival Analysis",
            apa: `Javed, F.*, Taj, F., Yousaf, A., & Aslam, S.* (2026). A Diagnosis-Independent Severity Phenotype in Cardiovascular Admissions Using Unsupervised Machine Learning and Survival Analysis. Department of Biomedical Engineering, Superior University.`,
            ieee: `F. Javed, F. Taj, A. Yousaf, and S. Aslam, "A Diagnosis-Independent Severity Phenotype in Cardiovascular Admissions Using Unsupervised Machine Learning and Survival Analysis," Dept. of Biomedical Engineering, Superior University, 2026.`,
            bibtex: `@article{javed2026cardiovascular,
  title={A Diagnosis-Independent Severity Phenotype in Cardiovascular Admissions Using Unsupervised Machine Learning and Survival Analysis},
  author={Javed, Faria and Taj, Fatime and Yousaf, Adnan and Aslam, Sara},
  journal={Department of Biomedical Engineering, Superior University},
  year={2026},
  note={First and Co-Corresponding Author}
}`
        },
        'pub-2': {
            title: "Polygenic Risk Score Matches Machine-Learning Discrimination Without Overfitting in Predicting Chemotherapy-Induced Hepatotoxicity in Pediatrics Acute Lymphoblastic Leukemia",
            apa: `Aslam, S.*, Sarwar, S., Yousaf, A., Javed, F., & Shabana* (2026). Polygenic Risk Score Matches Machine-Learning Discrimination Without Overfitting in Predicting Chemotherapy-Induced Hepatotoxicity in Pediatrics Acute Lymphoblastic Leukemia. Faculty of Engineering and Technology, Superior University.`,
            ieee: `S. Aslam, S. Sarwar, A. Yousaf, F. Javed, and Shabana, "Polygenic Risk Score Matches Machine-Learning Discrimination Without Overfitting in Predicting Chemotherapy-Induced Hepatotoxicity in Pediatrics Acute Lymphoblastic Leukemia," Faculty of Engineering and Technology, Superior University, 2026.`,
            bibtex: `@article{aslam2026polygenic,
  title={Polygenic Risk Score Matches Machine-Learning Discrimination Without Overfitting in Predicting Chemotherapy-Induced Hepatotoxicity in Pediatrics Acute Lymphoblastic Leukemia},
  author={Aslam, Sara and Sarwar, Sumbal and Yousaf, Adnan and Javed, Faria and Shabana},
  journal={Faculty of Engineering and Technology, Superior University},
  year={2026}
}`
        }
    };

    let currentPubCitation = null;
    let currentCitationFormat = 'apa';

    window.copyCitation = function(pubId) {
        const pub = publicationsData[pubId];
        if (!pub) return;
        const textToCopy = pub.apa;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("APA Citation copied to clipboard!", "success");
        }).catch(() => {
            showToast("Citation ready to copy.");
        });
    };

    const citationModal = document.getElementById('citation-modal');
    const citationModalClose = document.getElementById('citation-modal-close');
    const citationModalTitle = document.getElementById('citation-modal-title');
    const citationText = document.getElementById('citation-text');
    const copyCitationModalBtn = document.getElementById('copy-citation-modal-btn');
    const citationTabs = document.querySelectorAll('.citation-tab-btn');

    function updateCitationText() {
        if (!currentPubCitation || !citationText) return;
        citationText.textContent = currentPubCitation[currentCitationFormat] || currentPubCitation.apa;
    }

    window.openCitationModal = function(pubId) {
        const pub = publicationsData[pubId];
        if (!pub || !citationModal) return;
        currentPubCitation = pub;
        currentCitationFormat = 'bibtex'; // default to bibtex when clicking BibTeX button

        if (citationModalTitle) citationModalTitle.textContent = pub.title;

        // update tabs visual
        citationTabs.forEach(tab => {
            if (tab.dataset.format === 'bibtex') {
                tab.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
                tab.classList.remove('bg-white/5', 'text-slate-400');
            } else {
                tab.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
                tab.classList.add('bg-white/5', 'text-slate-400');
            }
        });

        updateCitationText();
        citationModal.classList.remove('hidden');
        citationModal.classList.add('flex');
    };

    if (citationTabs) {
        citationTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                citationTabs.forEach(t => {
                    t.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
                    t.classList.add('bg-white/5', 'text-slate-400');
                });
                tab.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
                tab.classList.remove('bg-white/5', 'text-slate-400');
                currentCitationFormat = tab.dataset.format;
                updateCitationText();
            });
        });
    }

    if (copyCitationModalBtn) {
        copyCitationModalBtn.addEventListener('click', () => {
            if (!citationText) return;
            navigator.clipboard.writeText(citationText.textContent).then(() => {
                showToast(`${currentCitationFormat.toUpperCase()} citation copied to clipboard!`, "success");
            });
        });
    }

    if (citationModalClose && citationModal) {
        citationModalClose.addEventListener('click', () => {
            citationModal.classList.add('hidden');
            citationModal.classList.remove('flex');
        });
        citationModal.addEventListener('click', (e) => {
            if (e.target === citationModal) {
                citationModal.classList.add('hidden');
                citationModal.classList.remove('flex');
            }
        });
    }

    // ================= 7. Certificates Data Store & Interactive Modal Viewer =================
    const certificateDetails = {
        'cert-utm': {
            title: "2nd Position International Poster Award",
            typeBadge: "International Competition Award",
            issuer: "Universiti Teknologi Malaysia (UTM) & iCBME / iMEDiTEC 2021",
            file: "certificates/Healthcare_Technologies_Award_UTM.pdf",
            externalUrl: "https://www.utm.my",
            externalLabel: "UTM Official Portal",
            desc: "Conferred 2nd Position (Silver Medal) in the Undergraduate Poster Competition in Healthcare Technologies category at the International Conference on Biosciences and Medical Engineering (iCBME) & International Medical Devices and Technology Conference (iMEDiTEC 2021) on 29th–30th June 2021. Awarded for research on 'A Cost Effective and Smart Framework for Health Monitoring'.",
            meta: [
                { label: "Award Level", value: "2nd Position (Silver Medal)" },
                { label: "Category", value: "Healthcare Technologies" },
                { label: "Conference Chair", value: "Prof. Dr. Kahar Bin Osman" },
                { label: "Conference", value: "iCBME 2021 & iMEDiTEC 2021" },
                { label: "Host University", value: "Universiti Teknologi Malaysia (UTM)" },
                { label: "Date", value: "June 29–30, 2021" },
                { label: "Document Size", value: "PDF • 4.3 MB" }
            ]
        },
        'cert-masters': {
            title: "MS in Biomedical Engineering Degree & HEC Attestation",
            typeBadge: "Postgraduate Degree & Government Attestation",
            issuer: "Riphah International University & Higher Education Commission (HEC) Pakistan",
            file: "certificates/Master_Degree_and_HEC_Attestation.pdf",
            externalUrl: "https://www.hec.gov.pk/site/verification",
            externalLabel: "HEC Online Verification",
            desc: "Official Master of Science in Biomedical Engineering Degree Certificate and comprehensive 4-semester Academic Transcript with a stellar CGPA of 3.89 / 4.00, formally authenticated and e-attested by the Higher Education Commission (HEC), Government of Pakistan under Reference No. HEC/A&A/DAS/2026/5129954.",
            meta: [
                { label: "Degree Awarded", value: "Master of Science (MS) Biomedical Engineering" },
                { label: "Cumulative GPA", value: "3.89 / 4.00 (A Grade)" },
                { label: "HEC e-Attestation Ref", value: "HEC/A&A/DAS/2026/5129954" },
                { label: "Student Registration", value: "F22C14G57029" },
                { label: "Degree Completion", value: "March 19, 2025" },
                { label: "Institution", value: "Riphah International University, Lahore" },
                { label: "Document Size", value: "Attested PDF • 8.1 MB" }
            ]
        },
        'cert-ielts': {
            title: "IELTS Academic Official Test Report Form",
            typeBadge: "Standardized English Language Proficiency",
            issuer: "British Council, IDP IELTS & Cambridge Assessment English",
            file: "certificates/IELTS_Academic_Test_Report.pdf",
            externalUrl: "https://ielts.org/verify",
            externalLabel: "Verify on IELTS.org",
            desc: "Official IELTS Academic English Test Report Form (TRF Number: 26PK507307JAVF011A). Conferred Cambridge English Level 1 Certificate in English with an Overall Band Score of 6.5 (CEFR Level B2). Sub-scores: Listening 7.5, Reading 6.5, Writing 6.5, Speaking 5.5.",
            meta: [
                { label: "Overall Band Score", value: "6.5 (CEFR Level B2)" },
                { label: "Listening", value: "7.5 (High Advanced)" },
                { label: "Reading", value: "6.5 (Competent)" },
                { label: "Writing", value: "6.5 (Competent)" },
                { label: "Speaking", value: "5.5 (Modest)" },
                { label: "TRF Form Number", value: "26PK507307JAVF011A" },
                { label: "Test Date", value: "06/SEP/2026" },
                { label: "Document Size", value: "Official PDF • 680 KB" }
            ]
        },
        'cert-fsc': {
            title: "Higher Secondary School Certificate (Intermediate F.Sc)",
            typeBadge: "Board of Intermediate & Secondary Education",
            issuer: "Board of Intermediate & Secondary Education (BISE) Faisalabad",
            file: "certificates/FSc_Intermediate_Certificate.pdf",
            externalUrl: "",
            externalLabel: "",
            desc: "Official BISE Faisalabad Intermediate Certificates: Pre-Medical Group with top academic honors (Grade A+ with 948/1100 marks) and Additional Mathematics certification in Pre-Engineering Group with 183/200 marks.",
            meta: [
                { label: "Pre-Medical Marks", value: "948 / 1100 marks (Grade A+)" },
                { label: "Pre-Engineering Math", value: "183 / 200 marks" },
                { label: "Exam Board", value: "BISE Faisalabad" },
                { label: "Roll Numbers", value: "207230 / 302551" },
                { label: "Document Size", value: "Official Board PDF • 1.1 MB" }
            ]
        }
    };

    // Certificate Filtering
    const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
    const certCards = document.querySelectorAll('.cert-card');

    if (certFilterBtns && certCards) {
        certFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter || 'all';

                certFilterBtns.forEach(b => {
                    b.classList.remove('active', 'bg-amber-500/20', 'text-amber-300', 'border-amber-500/40');
                    b.classList.add('bg-white/5', 'text-slate-300');
                });
                btn.classList.add('active', 'bg-amber-500/20', 'text-amber-300', 'border-amber-500/40');
                btn.classList.remove('bg-white/5', 'text-slate-300');

                certCards.forEach(card => {
                    const category = card.dataset.category || '';
                    if (filter === 'all' || category.includes(filter)) {
                        card.style.display = 'flex';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.95)';
                    }
                });
            });
        });
    }

    // Certificate Modal Viewer Handlers
    const certModal = document.getElementById('certificate-modal');
    const certModalClose = document.getElementById('cert-modal-close');
    const certModalTitle = document.getElementById('cert-modal-title');
    const certModalIssuer = document.getElementById('cert-modal-issuer');
    const certModalTypeBadge = document.getElementById('cert-modal-type-badge');
    const certModalMeta = document.getElementById('cert-modal-meta');
    const certModalDesc = document.getElementById('cert-modal-desc');
    const certModalIframe = document.getElementById('cert-modal-iframe');
    const certModalDownload = document.getElementById('cert-modal-download');
    const certModalExternal = document.getElementById('cert-modal-external');

    function openCertificateModal(certId) {
        const cert = certificateDetails[certId];
        if (!cert || !certModal) return;

        if (certModalTitle) certModalTitle.textContent = cert.title;
        if (certModalIssuer) certModalIssuer.textContent = cert.issuer;
        if (certModalTypeBadge) certModalTypeBadge.textContent = cert.typeBadge;
        if (certModalDesc) certModalDesc.textContent = cert.desc;

        // Meta tags
        if (certModalMeta) {
            certModalMeta.innerHTML = cert.meta.map(m => `
                <div class="flex items-center gap-1.5">
                    <span class="text-slate-400 text-[11px]">${m.label}:</span>
                    <span class="text-amber-300 font-semibold text-[11px]">${m.value}</span>
                </div>
            `).join('');
        }

        // PDF iframe preview
        if (certModalIframe) {
            certModalIframe.src = cert.file;
        }

        // Download link
        if (certModalDownload) {
            certModalDownload.href = cert.file;
            certModalDownload.setAttribute('download', cert.file.split('/').pop());
        }

        // External verify link
        if (certModalExternal) {
            if (cert.externalUrl) {
                certModalExternal.href = cert.externalUrl;
                certModalExternal.innerHTML = `<i class="fas fa-external-link-alt mr-1"></i> ${cert.externalLabel || 'Verify'}`;
                certModalExternal.classList.remove('hidden');
            } else {
                certModalExternal.classList.add('hidden');
                certModalExternal.href = '#';
            }
        }

        certModal.classList.remove('hidden');
        certModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
    }

    function closeCertificateModal() {
        if (!certModal) return;
        certModal.classList.add('hidden');
        certModal.classList.remove('flex');
        if (certModalIframe) {
            certModalIframe.src = '';
        }
        document.body.classList.remove('overflow-hidden');
    }

    document.querySelectorAll('.open-cert-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const certId = btn.dataset.certId;
            openCertificateModal(certId);
        });
    });

    if (certModalClose) {
        certModalClose.addEventListener('click', closeCertificateModal);
    }

    if (certModal) {
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                closeCertificateModal();
            }
        });
    }

    // Global ESC key to close any active modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCertificateModal();
            if (projectModal && !projectModal.classList.contains('hidden')) {
                projectModal.classList.add('hidden');
                projectModal.classList.remove('flex');
            }
            if (cvModal && !cvModal.classList.contains('hidden')) {
                cvModal.classList.add('hidden');
                cvModal.classList.remove('flex');
            }
            if (citationModal && !citationModal.classList.contains('hidden')) {
                citationModal.classList.add('hidden');
                citationModal.classList.remove('flex');
            }
            if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
                lightboxModal.classList.add('hidden');
                lightboxModal.classList.remove('flex');
            }
        }
    });
});


