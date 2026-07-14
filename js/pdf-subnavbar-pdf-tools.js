/**
 * PDF Sub-Navbar Component
 * Centralized navigation for PDF Tools
 */
    
(function() {
    // Function to inject the sub-navbar
    function injectPdfSubNavbar() {
        // Prevent duplicate injection
        if (document.querySelector('.sub-navbar')) {
            console.log('PDF Sub-navbar already exists, skipping injection.');
            // Optional: If you want to force replace the existing one, you could remove it here.
            // document.querySelector('.sub-navbar').remove();
            return;
        }

        const navbar = document.querySelector('header.navbar');
        if (!navbar) {
            console.warn('Header navbar not found, cannot inject PDF sub-navbar.');
            return;
        }

        // HTML Content with root-relative paths
        const subNavbarHtml = `
    <!-- HORSE BACKGROUND ANIMATION (YEAR OF BÍNH NGỌ 2026) 
    <div class="sidebar-horse-bg">
        <div class="horse-group">
            <div class="horse-flag-container">
                <img src="/assets/logo/logomain.png" alt="PrivatePDF Flag" class="horse-flag-img">
            </div>
            <img src="/assets/logo/horse.gif" class="horse-animal-img" alt="Running Horse">
            <div class="horse-dirt"></div>
        </div>
    </div>
    -->

    <!-- 1. BASIC TOOLS (DROPDOWN) -->
    <div class="sub-nav-dropdown">
        <span class="sub-nav-item">
            <!-- Icon Compress đại diện cho nhóm Basic -->
            <img src="/assets/logo/organize.svg" alt="" class="sub-nav-icon">
            <span data-i18n-key="common.basicTools">Basic Tools</span>
        </span>
        <div class="sub-nav-panel">
            <a href="/pdftools/nenpdf/nen.html" class="sub-nav-panel-item">
                <img src="/assets/logo/compress.svg" alt="">
                <span data-i18n-key="pdf.compress">Nén PDF</span>
            </a>
            <a href="/pdftools/ghepfile/merge.html" class="sub-nav-panel-item">
                <img src="/assets/logo/merge.svg" alt="">
                <span data-i18n-key="pdf.merge">Ghép PDF</span>
            </a>
            <a href="/pdftools/tachfile/split.html" class="sub-nav-panel-item">
                <img src="/assets/logo/split.svg" alt="">
                <span data-i18n-key="pdf.split">Tách PDF</span>
            </a>
            <a href="/pdftools/xoaypdf/xoay.html" class="sub-nav-panel-item">
                <img src="/assets/logo/rotate.svg" alt="">
                <span data-i18n-key="pdf.rotate">Xoay PDF</span>
            </a>
        </div>
    </div>
    
    <div class="sub-nav-divider"></div>

    <!-- 2. CONVERT (DROPDOWN - ẢNH + OFFICE) -->
    <div class="sub-nav-dropdown">
        <span class="sub-nav-item">
             <!-- Icon Convert -->
            <img src="/assets/logo/convert.svg" alt="" class="sub-nav-icon">
            <span data-i18n-key="common.convert">Chuyển đổi</span>
        </span>
        <div class="sub-nav-panel">
            <!-- Image Tools -->
            <a href="/pdftools/picture/imagetopdf.html" class="sub-nav-panel-item">
                <img src="/assets/logo/image.svg" alt="">
                <span data-i18n-key="pdf.imageToPdf">Ảnh → PDF</span>
            </a>
            <a href="/pdftools/pdfocr/ocr-pdf.html" class="sub-nav-panel-item">
                <img src="/assets/logo/ocr-pdf.svg" alt="">
                <span data-i18n-key="pdf.ocr">OCR PDF</span>
            </a>    

            <div class="sub-nav-panel-divider"></div>

            <!-- Office Tools -->
            <a href="/pdftools/wordtopdf/wordtopdf.html" class="sub-nav-panel-item">
                <img src="/assets/logo/word-pdf.svg" alt="">
                <span data-i18n-key="pdf.wordToPdf">Word → PDF</span>
            </a>
            <a href="/pdftools/pdftoword/pdftoword.html" class="sub-nav-panel-item">
                <img src="/assets/logo/pdf-word.svg" alt="">
                <span data-i18n-key="pdf.pdfToWord">PDF → Word</span>
            </a>
            <a href="/pdftools/exceltopdf/excel-to-pdf.html" class="sub-nav-panel-item">
                <img src="/assets/logo/excel-pdf.svg" alt="">
                <span data-i18n-key="pdf.excelToPdf">Excel → PDF</span>
            </a>
            <a href="/pdftools/pdf-to-excel/pdf-to-excel.html" class="sub-nav-panel-item">
                <img src="/assets/logo/pdf-excel.svg" alt="">
                <span data-i18n-key="pdf.pdfToExcel">PDF → Excel</span>
            </a>
            <a href="/pdftools/ppt-to-pdf/ppt-to-pdf.html" class="sub-nav-panel-item">
                <img src="/assets/logo/ppt-pdf.svg" alt="">
                <span data-i18n-key="pdf.pptToPdf">PPT → PDF</span>
            </a>
            <a href="/pdftools/pdftoppt/pdftoppt.html" class="sub-nav-panel-item">
                <img src="/assets/logo/pdf-ppt.svg" alt="">
                <span data-i18n-key="pdf.pdfToPpt">PDF → PPT</span>
            </a>
        </div>
    </div>
    
    <div class="sub-nav-divider"></div>

    <!-- 3. EDIT PDF (DROPDOWN) -->
    <div class="sub-nav-dropdown">
        <span class="sub-nav-item">
             <!-- Icon Edit -->
            <img src="/assets/logo/edit.svg" alt="" class="sub-nav-icon">
            <span data-i18n-key="common.edit">Chỉnh sửa</span>
        </span>
        <div class="sub-nav-panel">
            <a href="/pdftools/chukypdf/chuky.html" class="sub-nav-panel-item">
                <img src="/assets/logo/sign.svg" alt="">
                <span data-i18n-key="pdf.sign">Ký tên</span>
            </a>
            <a href="/pdftools/watermarkpdf/water.html" class="sub-nav-panel-item">
                <img src="/assets/logo/watermark.svg" alt="">
                <span data-i18n-key="pdf.watermark">Watermark</span>
            </a>
        </div>
    </div>


    <div class="sub-nav-divider"></div>

    <!--4 AI PDF -->
        <div class="sub-nav-dropdown">
        <!-- Icon AI-PDF -->
        <span class="sub-nav-item">
        <svg class="sub-nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.35 7.65L20 10L14.35 12.35L12 18L9.65 12.35L4 10L9.65 7.65L12 2Z" fill="var(--text-primary, #000)"/>
            <path d="M19 16L20.2 18.8L23 20L20.2 21.2L19 24L17.8 21.2L15 20L17.8 18.8L19 16Z" fill="var(--text-primary, #000)"/>
            <path d="M5 18L5.8 19.8L7.5 20.5L5.8 21.2L5 23L4.2 21.2L2.5 20.5L4.2 19.8L5 18Z" fill="var(--text-primary, #000)"/>
        </svg>
        <span data-i18n-key="common.ai">AI-PDF</span>
        </span>
        <div class="sub-nav-panel">
            <a href="/pdftools/chatpdf/chat-pdf.html" class="sub-nav-panel-item">
                <img src="/assets/logo/chat-pdf.svg" alt="">
                <span data-i18n-key="pdf.chatpdf">Chat with PDF</span>
            </a>
            <a href="/pdftools/translate-pdf/translate-pdf.html" class="sub-nav-panel-item">
                <img src="/assets/logo/translate-pdf.svg" alt="">
                <span data-i18n-key="pdf.translatepdf">Translate PDF</span>
            </a>
        </div>
    </div>
        `;

        // Create the nav element
        const nav = document.createElement('nav');
        nav.className = 'sub-navbar';
        nav.innerHTML = subNavbarHtml;

        // Insert after the main navbar
        navbar.insertAdjacentElement('afterend', nav);

        // Ensure body has the class for spacing if needed (though usually handled by CSS presence)
        if (!document.body.classList.contains('has-sub-navbar')) {
            document.body.classList.add('has-sub-navbar');
        }

        // Trigger translation if i18n is available
        if (window.i18n && typeof window.i18n.applyTranslations === 'function') {
            window.i18n.applyTranslations();
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectPdfSubNavbar);
    } else {
        injectPdfSubNavbar();
    }
})();
