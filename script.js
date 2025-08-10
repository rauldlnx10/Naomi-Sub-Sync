document.addEventListener('DOMContentLoaded', () => {
    // --- Objeto de Traducciones ---
    const translations = {
        es: {
            title: "Naomi Sub Sync",
            settingsButton: "⚙️",
            loadVideo: "📽 Cargar Video",
            loadSubs: "📄 Cargar Subtítulos",
            addButton: "Añadir Subtitulo",
            editButton: "Editar Subtitulo",
            deleteButton: "Eliminar Subtitulo",
            splitButton: "Dividir Subtitulo",
            splitTitle: "Dividir subtítulo en la posición actual (Ctrl+Shift+S)",
            mergeButton: "Unir",
            mergeTitle: "Unir subtítulo seleccionado con el siguiente (Ctrl+Shift+M)",
            uiExportFormat: "Formato de guardado",
            exportButton: "🡻 Exportar",
            helpButton: "❓ Ayuda",
            playPauseTitle: "Reproducir/Pausar",
            prevSubTitle: "Ir al subtítulo anterior",
            stepBackwardTitle: "Retroceder 1 fotograma",
            stepForwardTitle: "Avanzar 1 fotograma",
            nextSubTitle: "Ir al subtítulo siguiente",
            muteUnmuteTitle: "Silenciar/Activar sonido",
            volumeTitle: "Volumen",
            playbackRateLabel: "Velocidad:",
            playbackRateTitle: "Velocidad de reproducción",
            zoomLabel: "Zoom:",
            zoomOutTitle: "Disminuir zoom",
            zoomInTitle: "Aumentar zoom",
            centerTitle: "Centrar en el tiempo actual",
            autoScrollTitle: "Activar/Desactivar autodesplazamiento",
            undoTitle: "Deshacer (Ctrl+Z)",
            redoTitle: "Rehacer (Ctrl+Y)",
            offsetLabel: "Desplazar:",
            offsetTitle: "Desplazar todos los subtítulos en ms",
            applyOffsetButton: "Aplicar",
            findPlaceholder: "Buscar texto...",
            replacePlaceholder: "Reemplazar con...",
            findNextButton: "🔎 Siguiente",
            replaceButton: "Reemplazar",
            replaceAllButton: "Reemplazar Todo",
            saveButton: "Guardar",
            cancelButton: "Cancelar",
            editTitle: "Editar Subtítulo",
            errorNoVideo: "⚠️ Primero carga un video para asociar los subtítulos.",
            errorInvalidSubtitles: "No se encontraron subtítulos válidos.",
            errorParsingFile: "Error al analizar el archivo: ",
            errorNoTextOrVideo: "Escribe un texto y asegúrate de que haya un video cargado.",
            errorNoSubsToExport: "No hay subtítulos para exportar.",
            errorNoSubSelected: "No hay un subtítulo seleccionado.",
            errorNoNextSub: "No hay un subtítulo siguiente para unir.",
            errorCannotSplit: "No se puede dividir aquí. El cabezal está fuera del subtítulo o demasiado cerca de los bordes.",
            successSubsLoaded: "Subtítulos cargados correctamente. ✅",
            successSubAdded: "Subtítulo añadido. ✏️",
            successSubEdited: "Subtítulo editado. 📝",
            successSubDeleted: "Subtítulo eliminado. 🗑️",
            successSubSplitted: "Subtítulo dividido. ✂️",
            successSubMerged: "Subtítulos unidos. 🤝",
            successSubExported: "Subtítulos exportados. 💾",
            successOffsetApplied: "Desplazamiento aplicado. ⏱️",
            successFind: "Subtítulo encontrado en el tiempo {time}.",
            successNoMoreFinds: "No se encontraron más coincidencias.",
            successReplaced: "Reemplazadas {count} coincidencias.",
            promptEditSub: "Edita el texto del subtítulo:",
            promptAddSub: "Introduce el texto del nuevo subtítulo:",
            donateButton: 'Donar con PayPal',
            translateButton: '🌐',
            translateTitle: 'Traducir subtítulos',
            translateDes1: 'Ten en cuenta que esta traducción utiliza una API gratuita',
            translateDes2: 'Con un límite de 10,000 palabras o solicitudes al mes',
            translateDescription: 'Selecciona los idiomas de origen y de destino',
            sourceLanguageLabel: 'Idioma de origen:',
            targetLanguageLabel: 'Idioma de destino:',
            startTranslationButton: 'Iniciar traducción',
            errorNoSubsToTranslate: 'No hay subtítulos para traducir.',
            successTranslationStarted: 'Traducción en curso...',
            successTranslationComplete: 'Traducción completada. ✅',
            errorTranslationFailed: 'Error al traducir. Por favor, inténtalo de nuevo.',
            settingsTitle: 'Ajustes',
            uiLanguageLabel: 'Idioma de la UI:',
            themeLabel: 'Tema:',
            darkTheme: 'Oscuro',
            lightTheme: 'Claro',
            closeButton: 'Cerrar',
            helpTitle: "Ayuda y Atajos de Teclado",
            helpSpace: "Reproducir / Pausar",
            helpLeftArrow: "Retroceder un fotograma",
            helpRightArrow: "Avanzar un fotograma",
            helpUndo: "Deshacer",
            helpRedo: "Rehacer",
            helpDelete: "Eliminar subtítulo seleccionado",
            helpSplit: "Dividir subtítulo",
            helpMerge: "Unir con el siguiente",
            helpZoom: "Aumentar / Disminuir Zoom",
            helpDoubleClick: "Abrir editor",
            helpSave: "Exportar Subtítulos",
        },
        en: {
            title: "Naomi Sub Sync",
            settingsButton: "⚙️",
            loadVideo: "📽 Load Video",
            loadSubs: "📄 Load Subtitles",
            addButton: "Add",
            editButton: "Edit",
            deleteButton: "Delete",
            splitButton: "Split",
            splitTitle: "Split subtitle at current position (Ctrl+Shift+S)",
            mergeButton: "Merge",
            mergeTitle: "Merge selected subtitle with the next one (Ctrl+Shift+M)",
            uiExportFormat: "Export Format:",
            exportButton: "🡻 Export",
            helpButton: "❓ Help",
            playPauseTitle: "Play/Pause",
            prevSubTitle: "Go to previous subtitle",
            stepBackwardTitle: "Step back 1 frame",
            stepForwardTitle: "Step forward 1 frame",
            nextSubTitle: "Go to next subtitle",
            muteUnmuteTitle: "Mute/Unmute",
            volumeTitle: "Volume",
            playbackRateLabel: "Speed:",
            playbackRateTitle: "Playback speed",
            zoomLabel: "Zoom:",
            zoomOutTitle: "Zoom out",
            zoomInTitle: "Zoom in",
            centerTitle: "Center on current time",
            autoScrollTitle: "Enable/Disable auto-scroll",
            undoTitle: "Undo (Ctrl+Z)",
            redoTitle: "Redo (Ctrl+Y)",
            offsetLabel: "Offset:",
            offsetTitle: "Offset all subtitles in ms",
            applyOffsetButton: "Apply",
            findPlaceholder: "Text to find...",
            replacePlaceholder: "Replace with...",
            findNextButton: "🔎 Next",
            replaceButton: "Replace",
            replaceAllButton: "Replace All",
            saveButton: "Save",
            cancelButton: "Cancel",
            editTitle: "Edit Subtitle",
            errorNoVideo: "⚠️ Please load a video first to associate subtitles.",
            errorInvalidSubtitles: "No valid subtitles were found.",
            errorParsingFile: "Error parsing file: ",
            errorNoTextOrVideo: "Enter text and ensure a video is loaded.",
            errorNoSubsToExport: "There are no subtitles to export.",
            errorNoSubSelected: "No subtitle is selected.",
            errorNoNextSub: "No next subtitle to merge with.",
            errorCannotSplit: "Cannot split here. The playhead is outside the subtitle or too close to the edges.",
            successSubsLoaded: "Subtitles loaded successfully. ✅",
            successSubAdded: "Subtitle added. ✏️",
            successSubEdited: "Subtitle edited. 📝",
            successSubDeleted: "Subtitle deleted. 🗑️",
            successSubSplitted: "Subtitle split. ✂️",
            successSubMerged: "Subtitles merged. 🤝",
            successSubExported: "Subtitles exported. 💾",
            successOffsetApplied: "Offset applied. ⏱️",
            successFind: "Subtitle found at time {time}.",
            successNoMoreFinds: "No more matches found.",
            successReplaced: "Replaced {count} occurrences.",
            promptEditSub: "Edit the subtitle text:",
            promptAddSub: "Enter the text for the new subtitle:",
            donateButton: 'Donate with PayPal',
            translateButton: '🌐',
            translateTitle: 'Translate subtitles',
            translateDescription: 'Select source and target languages.',
            sourceLanguageLabel: 'Source language:',
            targetLanguageLabel: 'Target language:',
            startTranslationButton: 'Start translation',
            errorNoSubsToTranslate: 'No subtitles to translate.',
            successTranslationStarted: 'Translation in progress...',
            successTranslationComplete: 'Translation complete. ✅',
            errorTranslationFailed: 'Translation failed. Please try again.',
            translateDes1: 'Keep in mind that this translation uses a free API.',
            translateDes2: 'With a limit of 10,000 words or requests per month.',
            settingsTitle: 'Settings',
            uiLanguageLabel: 'UI Language:',
            themeLabel: 'Theme:',
            darkTheme: 'Dark',
            lightTheme: 'Light',
            closeButton: 'Close',
            helpTitle: "Help & Keyboard Shortcuts",
            helpSpace: "Play / Pause",
            helpLeftArrow: "Step back 1 frame",
            helpRightArrow: "Step forward 1 frame",
            helpUndo: "Undo",
            helpRedo: "Redo",
            helpDelete: "Delete selected subtitle",
            helpSplit: "Split subtitle",
            helpMerge: "Merge with next",
            helpZoom: "Zoom In / Out",
            helpDoubleClick: "Open editor",
            helpSave: "Export Subtitles",
        }
    };

    // --- Variables y Estado Global ---
    let subtitles = [];
    let videoDuration = 0;
    let pixelsPerSecond = 100;
    const videoFrameRate = 30;
    const snapInterval = 1 / videoFrameRate;
    const MIN_SUB_DURATION = 0.2; // Mínima duración permitida para un subtítulo
    let activeSubtitleIndex = null;
    let autoScrollEnabled = false;
    let animationFrameId = null;
    let history = [];
    let historyIndex = -1;
    const maxHistorySize = 50;
    let currentLanguage = 'es';
    let lastFoundIndex = -1;
    let isAddingNewSubtitle = false;

    // --- NUEVO: Constantes para advertencias ---
    const CPS_WARN_THRESHOLD = 25; // Caracteres por segundo
    const MIN_DURATION_WARN = 0.3; // Segundos
    const MAX_DURATION_WARN = 7;   // Segundos

    // --- Selectores del DOM ---
    const video = document.getElementById('video');
    const subtitleOverlay = document.getElementById('subtitle-overlay');
    const timelineContainer = document.getElementById('timeline-container');
    const timeline = document.getElementById('timeline');
    const timeRuler = document.getElementById('time-ruler');
    const currentTimeIndicator = document.getElementById('current-time');
    const videoFile = document.getElementById('video-file');
    const subtitleFile = document.getElementById('subtitle-file');
    const exportFormatSelect = document.getElementById('export-format');
    const exportBtn = document.getElementById('export-btn');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValueSpan = document.getElementById('volume-value');
    const playbackRateSlider = document.getElementById('playback-rate-slider');
    const playbackRateValueSpan = document.getElementById('playback-rate-value');
    const zoomSlider = document.getElementById('zoom-slider');
    const zoomValueSpan = document.getElementById('zoom-value');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const centerTimelineBtn = document.getElementById('center-timeline');
    const autoScrollBtn = document.getElementById('auto-scroll-btn');
    const errorMessage = document.getElementById('error-message');
    const languageSwitcher = document.getElementById('language-switcher');
    const undoBtn = document.getElementById('undo-btn');
    const redoBtn = document.getElementById('redo-btn');
    const offsetInput = document.getElementById('offset-input');
    const applyOffsetBtn = document.getElementById('apply-offset-btn');

    // Controles de búsqueda y reemplazo
    const findInput = document.getElementById('find-input');
    const replaceInput = document.getElementById('replace-input');
    const findNextBtn = document.getElementById('find-next-btn');
    const replaceBtn = document.getElementById('replace-btn');
    const replaceAllBtn = document.getElementById('replace-all-btn');


    // Controles en la línea de tiempo
    const addSubBtnTimeline = document.getElementById('add-sub-btn-timeline');
    const editSubBtnTimeline = document.getElementById('edit-sub-btn-timeline');
    const deleteSubBtnTimeline = document.getElementById('delete-sub-btn-timeline');
    const mergeSubBtnTimeline = document.getElementById('merge-sub-btn-timeline');
    const splitSubBtnTimeline = document.getElementById('split-sub-btn-timeline'); // NUEVO

    // UI Editor de texto flotante
    const editPopup = document.getElementById('edit-popup');
    const editPopupTextarea = document.getElementById('edit-popup-text');
    const saveEditBtn = document.getElementById('save-edit-btn');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const editPopupStats = document.getElementById('edit-popup-stats'); // NUEVO

    // Canvas para el waveform
    const waveformCanvas = document.getElementById('waveform-canvas');
    const waveformCtx = waveformCanvas.getContext('2d');
    let audioBuffer = null;

    // Elementos del popup de traducción
    const translateBtn = document.getElementById('translate-btn');
    const translatePopup = document.getElementById('translate-popup');
    const sourceLangSelect = document.getElementById('source-lang');
    const targetLangSelect = document.getElementById('target-lang');
    const startTranslationBtn = document.getElementById('start-translation-btn');
    const cancelTranslationBtn = document.getElementById('cancel-translation-btn-translate-popup');
    const translationStatusDiv = document.getElementById('translation-status');

    // Elementos del popup de ajustes
    const settingsBtn = document.getElementById('settings-btn');
    const settingsPopup = document.getElementById('settings-popup');
    const themeSwitcher = document.getElementById('theme-switcher');
    const closeSettingsBtn = document.getElementById('close-settings-btn');

    // NUEVO: Elementos del popup de ayuda
    const helpBtn = document.getElementById('help-btn');
    const helpPopup = document.getElementById('help-popup');
    const closeHelpBtn = document.getElementById('close-help-btn');

    // API de MyMemory para traducción
    const myMemoryApiUrl = 'https://api.mymemory.translated.net/get?q=';
    const availableLanguages = { "es": "Español", "en": "English", "fr": "Français", "de": "Deutsch", "it": "Italiano", "pt": "Português", "ru": "Русский", "ja": "日本語", "zh": "中文", "ko": "한국어" };


    // --- Funciones de Utilidad ---
    const setLanguage = (lang) => {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-i18n], [data-i18n-title], [data-i18n-placeholder]');
        elements.forEach(el => {
            if (el.hasAttribute('data-i18n')) {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) el.textContent = translations[lang][key];
            }
            if (el.hasAttribute('data-i18n-title')) {
                const key = el.getAttribute('data-i18n-title');
                if (translations[lang][key]) el.title = translations[lang][key];
            }
            if (el.hasAttribute('data-i18n-placeholder')) {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[lang][key]) el.placeholder = translations[lang][key];
            }
        });

        // Actualizar elementos específicos que no son texto simple
        document.querySelector('#theme-switcher option[value="dark"]').textContent = translations[lang]['darkTheme'];
        document.querySelector('#theme-switcher option[value="light"]').textContent = translations[lang]['lightTheme'];
        document.title = translations[lang]['title'];
        renderTimeline(); // Re-render para actualizar tooltips de advertencias
    };

    const setTheme = (theme) => {
        document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    };

    const parseSRT = (data) => {
        const subs = [];
        const regex = /(\d+)\r?\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})\r?\n([\s\S]*?)(?=\r?\n\r?\n|\r?$)/g;
        let match;
        while ((match = regex.exec(data)) !== null) {
            const [_, index, startStr, endStr, text] = match;
            const startTime = srtTimeToSeconds(startStr);
            const endTime = srtTimeToSeconds(endStr);
            if (!isNaN(startTime) && !isNaN(endTime) && text.trim()) {
                subs.push({ start: startTime, end: endTime, text: text.trim(), track: 0 });
            }
        }
        return subs;
    };

    const srtTimeToSeconds = (time) => {
        const [h, m, s, ms] = time.split(/[:,]/).map(Number);
        return h * 3600 + m * 60 + s + ms / 1000;
    };

    const formatSRTTime = (seconds) => {
        const date = new Date(seconds * 1000);
        const h = date.getUTCHours().toString().padStart(2, '0');
        const m = date.getUTCMinutes().toString().padStart(2, '0');
        const s = date.getUTCSeconds().toString().padStart(2, '0');
        const ms = Math.floor(date.getUTCMilliseconds()).toString().padStart(3, '0');
        return `${h}:${m}:${s},${ms}`;
    };

    const parseVTT = (data) => {
        const subs = [];
        const lines = data.split(/\r?\n/);
        if (!lines[0] || !lines[0].includes('WEBVTT')) {
            throw new Error('Not a valid VTT file.');
        }
        let i = 1;
        while (i < lines.length) {
            if (lines[i].trim() === '' || lines[i].startsWith('NOTE')) { i++; continue; }
            if (!lines[i].includes('-->')) { i++; continue; }

            const [start, end] = lines[i].split('-->').map(t => t.trim().split(' ')[0]);
            const startTime = vttTimeToSeconds(start);
            const endTime = vttTimeToSeconds(end);

            if (isNaN(startTime) || isNaN(endTime) || startTime >= endTime) { i++; continue; }
            i++;

            let text = '';
            while (i < lines.length && lines[i].trim() !== '') {
                text += (text ? '\n' : '') + lines[i];
                i++;
            }
            if (text.trim()) {
                subs.push({ start: startTime, end: endTime, text: text.trim(), track: 0 });
            }
            i++;
        }
        return subs;
    };

    const vttTimeToSeconds = (time) => {
        const parts = time.split(/[:.]/);
        if (parts.length < 3) return NaN;
        const ms = parseInt(parts.pop());
        const s = parseInt(parts.pop());
        const m = parseInt(parts.pop());
        const h = parts.length > 0 ? parseInt(parts.pop()) : 0;
        return (h * 3600) + (m * 60) + s + (ms / 1000);
    };

    const formatVTTTime = (seconds) => {
        const date = new Date(seconds * 1000);
        const h = date.getUTCHours().toString().padStart(2, '0');
        const m = date.getUTCMinutes().toString().padStart(2, '0');
        const s = date.getUTCSeconds().toString().padStart(2, '0');
        const ms = Math.floor(date.getUTCMilliseconds()).toString().padStart(3, '0');
        return `${h}:${m}:${s}.${ms}`;
    };

    const snapTime = (time) => Math.round(time / snapInterval) * snapInterval;

    const showMessage = (msgKey, isError = false, replacements = {}) => {
        let msg = translations[currentLanguage][msgKey] || msgKey;
        for (const key in replacements) {
            msg = msg.replace(`{${key}}`, replacements[key]);
        }
        errorMessage.textContent = msg;
        errorMessage.style.color = isError ? 'var(--error-color)' : 'var(--text-color)';
        errorMessage.style.display = 'block';
        if (!isError) {
            setTimeout(() => errorMessage.style.display = 'none', 3000);
        }
    };

    const clearMessage = () => {
        errorMessage.style.display = 'none';
    };

    // --- Lógica del Historial ---
    const saveHistory = () => {
        if (historyIndex < history.length - 1) {
            history = history.slice(0, historyIndex + 1);
        }
        history.push(JSON.stringify(subtitles));
        if (history.length > maxHistorySize) history.shift();
        historyIndex = history.length - 1;
        updateHistoryButtons();
    };

    const applyHistoryState = (index) => {
        if (index >= 0 && index < history.length) {
            historyIndex = index;
            subtitles = JSON.parse(history[historyIndex]);
            activeSubtitleIndex = null; // Deseleccionar al viajar en el historial
            renderTimeline();
            updateHistoryButtons();
        }
    };

    const undo = () => { if (historyIndex > 0) applyHistoryState(historyIndex - 1); };
    const redo = () => { if (historyIndex < history.length - 1) applyHistoryState(historyIndex + 1); };

    const updateHistoryButtons = () => {
        undoBtn.disabled = historyIndex <= 0;
        redoBtn.disabled = historyIndex >= history.length - 1;
    };

    const populateLanguages = () => {
        sourceLangSelect.innerHTML = '';
        targetLangSelect.innerHTML = '';
        for (const langCode in availableLanguages) {
            const optionSource = new Option(availableLanguages[langCode], langCode);
            const optionTarget = new Option(availableLanguages[langCode], langCode);
            sourceLangSelect.add(optionSource);
            targetLangSelect.add(optionTarget);
        }
        const userLang = navigator.language.split('-')[0];
        sourceLangSelect.value = availableLanguages[userLang] && userLang !== 'es' ? userLang : 'en';
        targetLangSelect.value = availableLanguages[userLang] ? userLang : 'es';
    };

    // --- NUEVO: Funciones de Calidad de Subtítulos ---
    const calculateCPS = (text, duration) => {
        if (duration === 0) return 0;
        return text.length / duration;
    };
    
    // --- Lógica de la Interfaz y el Video ---
    const renderTimeline = () => {
        timeline.innerHTML = '';
        timeRuler.innerHTML = '';
        if (!videoDuration) return;

        const timelineWidth = videoDuration * pixelsPerSecond;
        timeline.style.width = `${timelineWidth}px`;
        timeRuler.style.width = `${timelineWidth}px`;
        
        // Crear el track de la forma de onda y el canvas
        const waveformTrack = document.createElement('div');
        waveformTrack.id = 'waveform-track';
        const canvas = document.createElement('canvas');
        canvas.id = 'waveform-canvas';
        waveformTrack.appendChild(canvas);
        timeline.appendChild(waveformTrack);

        // DIBUJAR LA FORMA DE ONDA AQUÍ, DESPUÉS DE QUE EL CANVAS ESTÉ EN EL DOM
        if (audioBuffer) drawWaveform(); // drawWaveform ahora buscará el canvas por su ID y lo encontrará
        
        // El resto de la lógica para el ruler y los subtítulos
        const niceIntervals = [1, 2, 5, 10, 30, 60, 120, 300, 600];
        let interval = niceIntervals.find(nice => nice * pixelsPerSecond > 60) || 600;

        for (let t = 0; t <= videoDuration; t += interval) {
            const left = t * pixelsPerSecond;
            const marker = document.createElement('div');
            marker.className = 'time-marker';
            marker.style.left = `${left}px`;
            const label = document.createElement('div');
            label.className = 'time-marker-label';
            label.style.left = `${left}px`;
            label.textContent = formatSRTTime(t).substring(0, 8);
            timeRuler.appendChild(marker);
            timeRuler.appendChild(label);
        }
        
        const sortedSubs = [...subtitles].sort((a, b) => a.start - b.start);
        const tracks = [];
        sortedSubs.forEach(sub => {
            let foundTrack = tracks.findIndex(track => sub.start >= track[track.length - 1].end);
            if (foundTrack !== -1) {
                sub.track = foundTrack;
                tracks[foundTrack].push(sub);
            } else {
                sub.track = tracks.length;
                tracks.push([sub]);
            }
        });

        for (let i = 0; i < (tracks.length || 1); i++) {
            const trackDiv = document.createElement('div');
            trackDiv.className = 'subtitle-track';
            timeline.appendChild(trackDiv);
        }

        subtitles.forEach((sub, idx) => {
            const trackDiv = timeline.querySelector(`.subtitle-track:nth-child(${sub.track + 2})`);
            if (!trackDiv) return;

            const block = document.createElement('div');
            block.className = 'subtitle-block';
            block.classList.toggle('active', idx === activeSubtitleIndex);
            block.dataset.index = idx;

            const leftPos = sub.start * pixelsPerSecond;
            const width = (sub.end - sub.start) * pixelsPerSecond;
            block.style.left = `${leftPos}px`;
            block.style.width = `${Math.max(width, 20)}px`;
            
            let warnings = [];
            const duration = sub.end - sub.start;
            const cps = calculateCPS(sub.text, duration);
            if (cps > CPS_WARN_THRESHOLD) warnings.push(`CPS: ${cps.toFixed(1)} (muy alto)`);
            if (duration < MIN_DURATION_WARN) warnings.push(`Duración: ${duration.toFixed(2)}s (muy corta)`);
            if (duration > MAX_DURATION_WARN) warnings.push(`Duración: ${duration.toFixed(2)}s (muy larga)`);

            if (warnings.length > 0) {
                block.classList.add('sub-warning');
                block.title = `${formatSRTTime(sub.start)} --> ${formatSRTTime(sub.end)}\n${sub.text}\n\nADVERTENCIAS:\n- ${warnings.join('\n- ')}`;
            } else {
                block.title = `${formatSRTTime(sub.start)} --> ${formatSRTTime(sub.end)}\n${sub.text}`;
            }

            block.innerHTML = `<div class="handle left"></div><span class="sub-text">${sub.text.replace(/\n/g, ' ')}</span><div class="handle right"></div>`;
            trackDiv.appendChild(block);
        });
        
        updateActionButtons();
        updateUIBasedOnTime();
    };

    const updateActionButtons = () => {
        const hasActiveSub = activeSubtitleIndex !== null;
        editSubBtnTimeline.disabled = !hasActiveSub;
        deleteSubBtnTimeline.disabled = !hasActiveSub;
        splitSubBtnTimeline.disabled = !hasActiveSub;
        mergeSubBtnTimeline.disabled = !hasActiveSub || activeSubtitleIndex >= subtitles.length - 1;
        replaceBtn.disabled = !hasActiveSub;
    };
    
    const updateUIBasedOnTime = () => {
        if (!videoDuration) return;
        const currentTime = video.currentTime;
        currentTimeIndicator.style.left = `${currentTime * pixelsPerSecond}px`;
        const activeSub = subtitles.find(sub => currentTime >= sub.start && currentTime < sub.end);
        subtitleOverlay.textContent = activeSub ? activeSub.text : '';
        if (autoScrollEnabled) autoScrollTimeline();
    };

    const autoScrollTimeline = () => {
        const scrollPos = video.currentTime * pixelsPerSecond - timelineContainer.offsetWidth / 2;
        timelineContainer.scrollLeft = Math.max(0, scrollPos);
    };

    const animateTimeline = () => {
        if (video.paused || video.ended) return;
        updateUIBasedOnTime();
        animationFrameId = requestAnimationFrame(animateTimeline);
    };

    const processAudio = (file) => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                audioBuffer = await audioContext.decodeAudioData(e.target.result);
                drawWaveform();
            } catch (err) { console.error('Error decoding audio data:', err); }
        };
        reader.readAsArrayBuffer(file);
    };

    const drawWaveform = () => {
        if (!audioBuffer || !document.getElementById('waveform-canvas')) return;
        const canvas = document.getElementById('waveform-canvas');
        const ctx = canvas.getContext('2d');
        const timelineWidth = videoDuration * pixelsPerSecond;
        canvas.width = timelineWidth;
        const canvasHeight = canvas.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--waveform-color');
        
        const data = audioBuffer.getChannelData(0);
        const step = Math.ceil(data.length / canvas.width);
        const amp = canvasHeight / 2;
        for (let i = 0; i < canvas.width; i++) {
            let min = 1.0, max = -1.0;
            for (let j = 0; j < step; j++) {
                const datum = data[(i * step) + j];
                if (datum < min) min = datum;
                if (datum > max) max = datum;
            }
            ctx.fillRect(i, (1 + min) * amp, 1, Math.max(1, (max - min) * amp));
        }
    };
    
    const handleVideoLoad = () => {
        videoDuration = video.duration;
        subtitles = [];
        history = [];
        historyIndex = -1;
        activeSubtitleIndex = null;
        lastFoundIndex = -1;
        saveHistory();
        renderTimeline();
        video.volume = volumeSlider.value;
        video.playbackRate = playbackRateSlider.value;
        currentTimeIndicator.style.display = 'block';
        updateUIBasedOnTime();
        clearMessage();
        const videoFileObj = videoFile.files[0];
        if (videoFileObj) processAudio(videoFileObj);
    };

    const findAndJump = () => {
        const findText = findInput.value.trim().toLowerCase();
        if (!findText) return;
        
        let found = false;
        for (let i = 1; i < subtitles.length; i++) {
            const index = (lastFoundIndex + i) % subtitles.length;
            if (subtitles[index].text.toLowerCase().includes(findText)) {
                video.currentTime = subtitles[index].start;
                activeSubtitleIndex = index;
                lastFoundIndex = index;
                renderTimeline();
                showMessage('successFind', false, { time: formatSRTTime(subtitles[index].start) });
                found = true;
                break;
            }
        }
        if (!found) {
            showMessage('successNoMoreFinds', false);
            lastFoundIndex = -1;
        }
    };

    // --- Gestión de Eventos del DOM ---
    video.addEventListener('play', () => { animateTimeline(); playPauseBtn.textContent = '❚❚'; });
    video.addEventListener('pause', () => { cancelAnimationFrame(animationFrameId); animationFrameId = null; playPauseBtn.textContent = '▶'; });
    video.addEventListener('seeked', updateUIBasedOnTime);
    video.addEventListener('timeupdate', updateUIBasedOnTime);
    video.addEventListener('volumechange', () => {
        volumeValueSpan.textContent = `${Math.round(video.volume * 100)}%`;
        muteUnmuteBtn.textContent = video.muted || video.volume === 0 ? '🔇' : '🔊';
        volumeSlider.disabled = video.muted;
    });

    videoFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            video.src = URL.createObjectURL(file);
            video.addEventListener('loadedmetadata', handleVideoLoad, { once: true });
        }
    });

    subtitleFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (!videoDuration) { showMessage('errorNoVideo', true); return; }
        const reader = new FileReader();
        const fileExtension = file.name.split('.').pop().toLowerCase();
        reader.onload = () => {
            try {
                subtitles = fileExtension === 'srt' ? parseSRT(reader.result) : parseVTT(reader.result);
                if (subtitles.length === 0) { showMessage('errorInvalidSubtitles', true); }
                else {
                    subtitles.sort((a,b) => a.start - b.start);
                    history = [];
                    historyIndex = -1;
                    activeSubtitleIndex = null;
                    saveHistory();
                    renderTimeline();
                    showMessage('successSubsLoaded');
                }
            } catch (err) { showMessage('errorParsingFile', true); console.error(err); }
        };
        reader.readAsText(file);
    });

    addSubBtnTimeline.addEventListener('click', () => {
        if (!videoDuration) { showMessage('errorNoVideo', true); return; }
        isAddingNewSubtitle = true;
        editPopupTextarea.value = '';
        editPopupTextarea.placeholder = translations[currentLanguage].promptAddSub;
        editPopupStats.textContent = '';
        editPopup.style.display = 'block';
        editPopupTextarea.focus();
    });

    editSubBtnTimeline.addEventListener('click', () => {
        if (activeSubtitleIndex !== null) {
            isAddingNewSubtitle = false;
            const sub = subtitles[activeSubtitleIndex];
            editPopupTextarea.value = sub.text;
            editPopupTextarea.placeholder = translations[currentLanguage].promptEditSub;
            updateEditPopupStats();
            editPopup.style.display = 'block';
            editPopupTextarea.focus();
        } else { showMessage('errorNoSubSelected', true); }
    });

    // NUEVO: Evento para actualizar stats del editor en vivo
    editPopupTextarea.addEventListener('input', updateEditPopupStats);

    function updateEditPopupStats() {
        if (activeSubtitleIndex !== null) {
            const sub = subtitles[activeSubtitleIndex];
            const duration = sub.end - sub.start;
            const text = editPopupTextarea.value;
            const cps = calculateCPS(text, duration);
            editPopupStats.textContent = `Duración: ${duration.toFixed(2)}s | Caracteres: ${text.length} | CPS: ${cps.toFixed(2)}`;
            editPopupStats.style.color = cps > CPS_WARN_THRESHOLD ? 'var(--warning-color)' : 'var(--text-color)';
        }
    }

    deleteSubBtnTimeline.addEventListener('click', () => {
        if (activeSubtitleIndex !== null) {
            subtitles.splice(activeSubtitleIndex, 1);
            activeSubtitleIndex = null;
            saveHistory();
            renderTimeline();
            showMessage('successSubDeleted');
        }
    });

    mergeSubBtnTimeline.addEventListener('click', () => {
        if (activeSubtitleIndex === null) { showMessage('errorNoSubSelected', true); return; }
        const currentSub = subtitles[activeSubtitleIndex];
        const nextSubIndex = subtitles.findIndex(s => s.start >= currentSub.end);
        const nextSub = subtitles[nextSubIndex];
        if (!nextSub) { showMessage('errorNoNextSub', true); return; }
        
        currentSub.end = nextSub.end;
        currentSub.text += '\n' + nextSub.text;
        subtitles.splice(nextSubIndex, 1);
        saveHistory();
        renderTimeline();
        showMessage('successSubMerged');
    });

    // NUEVO: Lógica para dividir subtítulos
    splitSubBtnTimeline.addEventListener('click', () => {
        if (activeSubtitleIndex === null) { showMessage('errorNoSubSelected', true); return; }
        const sub = subtitles[activeSubtitleIndex];
        const splitTime = video.currentTime;
        if (splitTime <= sub.start + MIN_SUB_DURATION || splitTime >= sub.end - MIN_SUB_DURATION) {
            showMessage('errorCannotSplit', true);
            return;
        }

        const newSub = {
            start: snapTime(splitTime),
            end: sub.end,
            text: sub.text, // Dejamos el texto completo para que el usuario lo edite
            track: sub.track
        };
        sub.end = snapTime(splitTime);

        subtitles.splice(activeSubtitleIndex + 1, 0, newSub);
        subtitles.sort((a, b) => a.start - b.start);
        activeSubtitleIndex++; // Seleccionar el nuevo subtítulo creado
        saveHistory();
        renderTimeline();
        showMessage('successSubSplitted');
    });

    saveEditBtn.addEventListener('click', () => {
        const newText = editPopupTextarea.value.trim();
        if (!newText) { showMessage('errorNoTextOrVideo', true); return; }

        if (isAddingNewSubtitle) {
            const currentTime = video.currentTime;
            const newSub = { start: snapTime(currentTime), end: snapTime(currentTime + 2), text: newText, track: 0 };
            subtitles.push(newSub);
            subtitles.sort((a, b) => a.start - b.start);
            showMessage('successSubAdded');
        } else if (activeSubtitleIndex !== null) {
            subtitles[activeSubtitleIndex].text = newText;
            showMessage('successSubEdited');
        }
        saveHistory();
        renderTimeline();
        editPopup.style.display = 'none';
    });

    cancelEditBtn.addEventListener('click', () => editPopup.style.display = 'none');

    exportBtn.addEventListener('click', async () => {
        if (subtitles.length === 0) { showMessage('errorNoSubsToExport', true); return; }
        const format = exportFormatSelect.value;
        let content = '', filename = '';
        const sortedSubs = [...subtitles].sort((a, b) => a.start - b.start);

        if (format === 'srt') {
            content = sortedSubs.map((s, i) => `${i + 1}\n${formatSRTTime(s.start)} --> ${formatSRTTime(s.end)}\n${s.text}\n`).join('\n');
            filename = 'subtitles_edited.srt';
        } else {
            content = 'WEBVTT\n\n' + sortedSubs.map((s, i) => `${i + 1}\n${formatVTTTime(s.start)} --> ${formatVTTTime(s.end)}\n${s.text}`).join('\n\n');
            filename = 'subtitles_edited.vtt';
        }

        try {
            if ('showSaveFilePicker' in window) {
                const handle = await window.showSaveFilePicker({ suggestedName: filename, types: [{ description: `Subtitle File`, accept: { 'text/plain': [`.${format}`] } }] });
                const writable = await handle.createWritable();
                await writable.write(content);
                await writable.close();
            } else {
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url; a.download = filename; a.click();
                URL.revokeObjectURL(url);
            }
            showMessage('successSubExported');
        } catch (err) { if (err.name !== 'AbortError') console.error('Export failed:', err); }
    });

    applyOffsetBtn.addEventListener('click', () => {
        const offset = parseFloat(offsetInput.value) / 1000;
        if (isNaN(offset) || !subtitles.length) return;
        subtitles.forEach(sub => {
            sub.start = Math.max(0, sub.start + offset);
            sub.end = Math.max(sub.start + MIN_SUB_DURATION, sub.end + offset);
        });
        saveHistory();
        renderTimeline();
        showMessage('successOffsetApplied');
    });

    findNextBtn.addEventListener('click', findAndJump);
    findInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') findAndJump(); });

    // NUEVO: Lógica de Reemplazar
    replaceBtn.addEventListener('click', () => {
        const findText = findInput.value;
        const replaceText = replaceInput.value;
        if (!findText || activeSubtitleIndex === null) return;
        
        const sub = subtitles[activeSubtitleIndex];
        const newText = sub.text.replace(findText, replaceText);
        if (newText !== sub.text) {
            sub.text = newText;
            saveHistory();
            renderTimeline();
            showMessage('successSubEdited');
        }
    });

    replaceAllBtn.addEventListener('click', () => {
        const findText = findInput.value;
        const replaceText = replaceInput.value;
        if (!findText) return;

        let count = 0;
        const findRegex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        
        subtitles.forEach(sub => {
            const initialText = sub.text;
            sub.text = sub.text.replace(findRegex, replaceText);
            if (sub.text !== initialText) {
                count++;
            }
        });

        if (count > 0) {
            saveHistory();
            renderTimeline();
            showMessage('successReplaced', false, { count: count });
        } else {
            showMessage('successNoMoreFinds');
        }
    });


    playPauseBtn.addEventListener('click', () => video.paused ? video.play() : video.pause());
    muteUnmuteBtn.addEventListener('click', () => video.muted = !video.muted);
    volumeSlider.addEventListener('input', () => video.volume = volumeSlider.value);
    playbackRateSlider.addEventListener('input', () => { video.playbackRate = playbackRateSlider.value; playbackRateValueSpan.textContent = `${playbackRateSlider.value}x`; });

    document.getElementById('prev-sub-btn').addEventListener('click', () => {
        const prevSub = subtitles.slice().reverse().find(sub => sub.start < video.currentTime);
        if (prevSub) video.currentTime = prevSub.start;
    });
    document.getElementById('next-sub-btn').addEventListener('click', () => {
        const nextSub = subtitles.find(sub => sub.start > video.currentTime);
        if (nextSub) video.currentTime = nextSub.start;
    });
    document.getElementById('step-backward-btn').addEventListener('click', () => video.currentTime -= snapInterval);
    document.getElementById('step-forward-btn').addEventListener('click', () => video.currentTime += snapInterval);

    undoBtn.addEventListener('click', undo);
    redoBtn.addEventListener('click', redo);
    autoScrollBtn.addEventListener('click', () => { autoScrollEnabled = !autoScrollEnabled; autoScrollBtn.classList.toggle('active', autoScrollEnabled); });
    centerTimelineBtn.addEventListener('click', autoScrollTimeline);

    zoomSlider.addEventListener('input', () => {
        const oldCenterTime = (timelineContainer.scrollLeft + timelineContainer.offsetWidth / 2) / pixelsPerSecond;
        pixelsPerSecond = parseInt(zoomSlider.value);
        zoomValueSpan.textContent = zoomSlider.value;
        renderTimeline();
        timelineContainer.scrollLeft = oldCenterTime * pixelsPerSecond - timelineContainer.offsetWidth / 2;
    });
    zoomInBtn.addEventListener('click', () => { zoomSlider.value = Math.min(parseInt(zoomSlider.value) + 20, 500); zoomSlider.dispatchEvent(new Event('input')); });
    zoomOutBtn.addEventListener('click', () => { zoomSlider.value = Math.max(parseInt(zoomSlider.value) - 20, 20); zoomSlider.dispatchEvent(new Event('input')); });

    timelineContainer.addEventListener('scroll', () => { timeRuler.style.transform = `translateX(${-timelineContainer.scrollLeft}px)`; });
    timeRuler.addEventListener('click', (e) => {
        const clickX = e.clientX + timelineContainer.scrollLeft - timelineContainer.getBoundingClientRect().left;
        video.currentTime = Math.max(0, Math.min(video.duration, clickX / pixelsPerSecond));
    });
    
    // Popups (Traducción, Ajustes, Ayuda)
    translateBtn.addEventListener('click', () => { if (subtitles.length > 0) { populateLanguages(); translatePopup.style.display = 'block'; } else { showMessage('errorNoSubsToTranslate', true); } });
    cancelTranslationBtn.addEventListener('click', () => translatePopup.style.display = 'none');
    startTranslationBtn.addEventListener('click', async () => {
        const sourceLang = sourceLangSelect.value;
        const targetLang = targetLangSelect.value;

        if (!sourceLang || !targetLang) {
            showMessage('Error: Selecciona los idiomas de origen y destino.', true);
            return;
        }
            
        translationStatusDiv.textContent = translations[currentLanguage].successTranslationStarted;
        startTranslationBtn.disabled = true;

        const translatedSubtitles = [];
        const originalTexts = subtitles.map(sub => sub.text);

        try {
            for (const [index, text] of originalTexts.entries()) {
                const encodedText = encodeURIComponent(text);
                const url = `${myMemoryApiUrl}${encodedText}&langpair=${sourceLang}|${targetLang}`;
                    
                const response = await fetch(url);
                const data = await response.json();
                
                if (data && data.responseData && data.responseData.translatedText) {
                    const translatedText = data.responseData.translatedText;
                    translatedSubtitles.push({
                        ...subtitles[index],
                        text: translatedText
                    });
                    translationStatusDiv.textContent = `${translations[currentLanguage].successTranslationStarted} (${index + 1}/${subtitles.length})`;
                } else {
                    throw new Error('Invalid translation response.');
                }
            }
                
            subtitles = translatedSubtitles;
            saveHistory();
            renderTimeline();
            showMessage('successTranslationComplete');
            translatePopup.style.display = 'none';

        } catch (error) {
            console.error('Translation error:', error);
            showMessage('errorTranslationFailed', true);
        } finally {
            startTranslationBtn.disabled = false;
        }
    });
    
    settingsBtn.addEventListener('click', () => { languageSwitcher.value = currentLanguage; themeSwitcher.value = document.body.classList.contains('dark-theme') ? 'dark' : 'light'; settingsPopup.style.display = 'block'; });
    closeSettingsBtn.addEventListener('click', () => settingsPopup.style.display = 'none');
    
    helpBtn.addEventListener('click', () => helpPopup.style.display = 'block');
    closeHelpBtn.addEventListener('click', () => helpPopup.style.display = 'none');

    languageSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
    themeSwitcher.addEventListener('change', (e) => setTheme(e.target.value));

    // Lógica de Arrastre y Redimensionado
    let draggingState = {};
    let lastClickTime = 0;
    const DBLCLICK_THRESHOLD = 300; // milliseconds

    timeline.addEventListener('mousedown', (e) => {
        const now = Date.now();
        const isDoubleClick = (now - lastClickTime) < DBLCLICK_THRESHOLD;
        lastClickTime = now;
        
        // Si es un doble clic, ignoramos la lógica de arrastre para que se dispare el evento dblclick.
        if (isDoubleClick) {
            e.preventDefault();
            return;
        }

        const block = e.target.closest('.subtitle-block');
        document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
        
        if (block) {
            activeSubtitleIndex = parseInt(block.dataset.index);
            renderTimeline();
            draggingState = {
                type: e.target.classList.contains('handle') ? 'resize' : 'drag',
                block,
                side: e.target.classList.contains('left') ? 'left' : 'right',
                startX: e.clientX,
                origStart: subtitles[activeSubtitleIndex].start,
                origEnd: subtitles[activeSubtitleIndex].end
            };
        } else {
            activeSubtitleIndex = null;
            renderTimeline();
            draggingState = { type: 'pan', startX: e.clientX, startScrollLeft: timelineContainer.scrollLeft };
            timeline.classList.add('dragging');
        }
        
        e.preventDefault();
    });

    currentTimeIndicator.addEventListener('mousedown', (e) => { draggingState = { type: 'seek' }; video.pause(); e.preventDefault(); });

    document.addEventListener('mousemove', (e) => {
        if (!draggingState.type) return;
        const dx = (e.clientX - draggingState.startX) / pixelsPerSecond;
        if (draggingState.type === 'drag') {
            const dur = draggingState.origEnd - draggingState.origStart;
            let newStart = snapTime(draggingState.origStart + dx);
            subtitles[activeSubtitleIndex].start = Math.max(0, newStart);
            subtitles[activeSubtitleIndex].end = subtitles[activeSubtitleIndex].start + dur;
            renderTimeline();
        } else if (draggingState.type === 'resize') {
            let { origStart, origEnd } = draggingState;
            if (draggingState.side === 'left') origStart = snapTime(origStart + dx);
            else origEnd = snapTime(origEnd + dx);
            subtitles[activeSubtitleIndex].start = Math.max(0, Math.min(origEnd - MIN_SUB_DURATION, origStart));
            subtitles[activeSubtitleIndex].end = Math.min(videoDuration, Math.max(origStart + MIN_SUB_DURATION, origEnd));
            renderTimeline();
        } else if (draggingState.type === 'pan') {
            timelineContainer.scrollLeft = draggingState.startScrollLeft - (e.clientX - draggingState.startX);
        } else if (draggingState.type === 'seek') {
            const newTime = (timelineContainer.scrollLeft + e.clientX - timelineContainer.getBoundingClientRect().left) / pixelsPerSecond;
            video.currentTime = Math.max(0, Math.min(videoDuration, newTime));
        }
    });

    document.addEventListener('mouseup', () => {
        if (draggingState.type === 'drag' || draggingState.type === 'resize') saveHistory();
        draggingState = {};
        timeline.classList.remove('dragging');
    });

    timeline.addEventListener('dblclick', (e) => {
        const block = e.target.closest('.subtitle-block');
        if (block) { activeSubtitleIndex = parseInt(block.dataset.index); editSubBtnTimeline.click(); }
    });

    // --- Atajos de Teclado ---
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (document.querySelector('.popup[style*="block"]')) {
            if (e.key === 'Escape') document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
            return;
        }

        const actions = {
            'Space': () => video.paused ? video.play() : video.pause(),
            'ArrowLeft': () => {
                if (!e.ctrlKey) video.currentTime -= snapInterval
            },
            'ArrowRight': () => {
                if (!e.ctrlKey) video.currentTime += snapInterval
            },
            'Delete': () => deleteSubBtnTimeline.click(),
            'Backspace': () => deleteSubBtnTimeline.click(),
            'Equal': () => zoomInBtn.click(),
            'NumpadAdd': () => zoomInBtn.click(),
            'Minus': () => zoomOutBtn.click(),
            'NumpadSubtract': () => zoomOutBtn.click(),
        };

        if (actions[e.code]) {
            e.preventDefault();
            actions[e.code]();
        }

        if (e.ctrlKey) {
            const ctrlActions = {
                'KeyZ': undo,
                'KeyY': redo,
                'KeyS': () => exportBtn.click(),
            };
            if (ctrlActions[e.code]) {
                e.preventDefault();
                ctrlActions[e.code]();
            }

            if (e.shiftKey) {
                const ctrlShiftActions = {
                    'KeyM': () => mergeSubBtnTimeline.click(),
                    'KeyS': () => splitSubBtnTimeline.click(),
                };
                if (ctrlShiftActions[e.code]) {
                    e.preventDefault();
                    ctrlShiftActions[e.code]();
                }
            }
        }
    });

    // --- Solución para Devolver el Foco ---
    // Este bloque asegura que el foco del teclado siempre regrese al documento
    // después de cualquier clic, para que los atajos de teclado sigan funcionando.
    document.addEventListener('click', () => {
        setTimeout(() => {
            if (!document.activeElement || document.activeElement.tagName === 'BODY' || document.activeElement.tagName === 'HTML') {
                document.body.focus();
            }
        }, 0);
    });

    // --- Inicialización ---
    const init = () => {
        setLanguage('es');
        volumeValueSpan.textContent = `${Math.round(video.volume * 100)}%`;
        playbackRateValueSpan.textContent = `${video.playbackRate}x`;
        zoomValueSpan.textContent = `${zoomSlider.value}`;
        currentTimeIndicator.style.display = 'none';
        document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
        renderTimeline();
    };

    init();
});