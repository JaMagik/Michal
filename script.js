document.getElementById('generatePdfButton').addEventListener('click', generatePDF);

let pdfKlient;




async function loadImageData() {
    const imagesModule = await import('./images.js');

    pdfKlient = imagesModule.pdfKlient;

}

loadImageData();



function generatePDF() {
    // Pobranie wartości z formularza
    const userName = document.getElementById('userName').value;
    const instalationType = document.getElementById('instalationType').value;
    const panelType = document.getElementById('panelType').value; // Zaktualizowany identyfikator
    const inverterName = document.getElementById('inverterName').value; // Zaktualizowany identyfikator
    const ZKP = document.getElementById('ZKP').value

    // Treść pierwszej strony PDF
    const firstPageContent = `
    <div id="page" style= " background-image: url('${pdfKlient}'); background-size: cover; position: relative; width: 295mm; height: 206mm;">
    <div id="userName" style="position: absolute; top: 34px; left: 120px; font-size: 14px; font-weight: 800; font-style: italic;">
        ${userName}
    </div>
    <div id="instalationType" style="position: absolute; top: 60px; left: 139px; font-size: 14px; font-weight: 800; font-style: italic;">
        ${instalationType}
    </div>
    <div id="panelType" style="position: absolute; top: 54px; left: 835px; font-size: 14px; font-weight: 800; font-style: italic;">
        ${panelType}
    </div>
    <div id="inverterName" style="position: absolute; top: 493px; left: 730px; font-size: 14px; font-weight: 800; font-style: italic;">
        ${inverterName}
    </div>
    <div id="ZKP" style="position: absolute; top: 148px; left: 112px; font-size: 10px; font-weight: 800; font-style: italic;">
        ${ZKP}
    </div>
</div>
    `;

    // Opcje dla generowania PDF
    const opt = {
        margin: 0,
        filename: `${userName}_Oferta.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 4, dpi: 300, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    // Generowanie i zapisywanie PDF
    html2pdf().from(firstPageContent).set(opt).save();
}







