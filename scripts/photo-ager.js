const uploadButton = document.getElementById('upload');
const downloadButton = document.getElementById('download-btn');
const textureSelect = document.getElementById('texture-select');
const textureOpacity = document.getElementById('texture-opacity');
const blendMode = document.getElementById('blend-mode');
const outputSize = document.getElementById('output-size');
const proportionalResize = document.getElementById('proportional-resize');
const secondDimensionSize = document.getElementById('second-dimension-size');
const imagePreview = document.getElementById('image-preview');
const nonProportionalSize = document.getElementById('non-proportional-size');
const outputSizeLabel = document.getElementById('output-size-label');
const previewCanvas = document.getElementById('processed-preview');
const processingProgress = document.getElementById('processing-progress');
const agingStrength = document.getElementById('aging-strength');

uploadButton.addEventListener('change', handleFileUpload);
downloadButton.addEventListener('click', downloadAllImages);
textureSelect.addEventListener('change', updatePreview);
textureOpacity.addEventListener('input', updatePreview);
blendMode.addEventListener('change', updatePreview);
outputSize.addEventListener('input', updatePreview);
proportionalResize.addEventListener('change', toggleProportionalResize);
secondDimensionSize.addEventListener('input', updatePreview);
agingStrength.addEventListener('input', updatePreview);

let uploadedImages = [];

function handleFileUpload(event) {
    uploadedImages = [];
    const files = event.target.files;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = function() {
                        uploadedImages.push(img);
                        if (uploadedImages.length === 1) {
                            imagePreview.src = img.src;
                            processImage(img, function(canvas) {
                                updatePreview();
                            });
                        }
                    }
                }
                reader.readAsDataURL(files[i]);
            } else {
                alert('Please upload valid image files.');
                return;
            }
        }
    }
}

function processImage(img, callback) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;

    if (proportionalResize.checked) {
        const maxSize = parseInt(outputSize.value);
        if (img.width > img.height) {
            width = maxSize;
            height = (img.height / img.width) * maxSize;
        } else {
            height = maxSize;
            width = (img.width / img.height) * maxSize;
        }
    } else {
        width = parseInt(outputSize.value);
        height = parseInt(secondDimensionSize.value);
    }

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);
    applyAgingEffect(ctx, width, height, function() {
        if (callback) {
            callback(canvas);
        }
    });
}

function applyAgingEffect(ctx, width, height, callback) {
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;

    const strength = 1-parseFloat(agingStrength.value);

    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i] * strength;
        data[i + 1] = data[i + 1] * strength;
        data[i + 2] = data[i + 2] * strength; 
    }

    ctx.putImageData(imgData, 0, 0);

    const selectedTexture = textureSelect.value;
    const selectedTextureOpacity = parseFloat(textureOpacity.value);
    const selectedBlendMode = blendMode.value;
    
    if (selectedTexture != 'null') {
        const texture = new Image();
        texture.src = `../src/photo-ager/textures/${selectedTexture}`;
        texture.onload = function() {
            ctx.globalAlpha = selectedTextureOpacity;
            ctx.globalCompositeOperation = selectedBlendMode;
            ctx.drawImage(texture, 0, 0, width, height);
            ctx.globalAlpha = 1.0;
            ctx.globalCompositeOperation = 'source-over';
            if (callback) {
                callback();
            }
        }
    } else {
        if (callback) {
            callback();
        }
    }    
}

function updatePreview() {
    processImage(uploadedImages[0], function(canvas) {
        previewCanvas.width = canvas.width;
        previewCanvas.height = canvas.height;
        const previewCtx = previewCanvas.getContext('2d');
        previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
        previewCtx.drawImage(canvas, 0, 0);
    });
}

function downloadAllImages() {
    const totalImages = uploadedImages.length;
    let processedCount = 0;

    function processNext() {
        function procces(canvas) {
            const link = document.createElement('a');
            link.download = `aged-flag-${processedCount + 1}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            processedCount++;
            updateProgress(processedCount / totalImages * 100);

            if (processedCount < totalImages) {
                processImage(uploadedImages[processedCount], function(nextCanvas) {
                    const previewCtx = previewCanvas.getContext('2d');
                    previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
                    previewCtx.drawImage(nextCanvas, 0, 0);
                });
                setTimeout(processNext, 100);
            }
        }
        if (processedCount < totalImages) {
            const img = uploadedImages[processedCount];
            processImage(img, procces);
        }
    }

    processNext();
}

function updateProgress(percent) {
    processingProgress.value = percent;
}

function toggleProportionalResize() {
    const isProportional = proportionalResize.checked;

    if (isProportional) {
        nonProportionalSize.style.display = 'none';
        outputSizeLabel.textContent = 'Output Image Size (px):';
    } else {
        nonProportionalSize.style.display = 'block';
        outputSizeLabel.textContent = 'Width (px):';
    }
    updatePreview();
}