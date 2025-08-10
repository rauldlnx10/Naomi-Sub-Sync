document.addEventListener('DOMContentLoaded', () => {
    // --- Objeto de Traducciones ---
    const translations = {
        es: {
            title: "Naomi Sub Sync",
            settingsButton: "⚙️ Ajustes",
            loadVideo: "📽 Cargar Video",
            loadSubs: "📄 Cargar Subtítulos",
            addButton: "Añadir Subtitulo",
            editButton: "Editar Subtitulo",
            deleteButton: "Eliminar Subtitulo",
            splitButton: "Separar Subtitulo",
            splitTitle: "Separar subtítulo en la posición actual (Ctrl+Shift+S)",
            mergeButton: "Unir",
            mergeTitle: "Unir subtítulo seleccionado con el siguiente (Ctrl+Shift+M)",
            uiExportFormat: "Formato de guardado",
            exportButton: "🡻 Exportar",
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
            findLabel: "Buscar:",
            findPlaceholder: "Texto a buscar...",
            findButton: "🔎 Buscar",
            findNextButton: "⏭ Siguiente",
            saveButton: "Guardar",
            cancelButton: "Cancelar",
            errorNoVideo: "⚠️ Primero carga un video para asociar los subtítulos.",
            errorInvalidSubtitles: "No se encontraron subtítulos válidos.",
            errorParsingFile: "Error al analizar el archivo: ",
            errorNoTextOrVideo: "Escribe un texto y asegúrate de que haya un video cargado.",
            errorNoSubsToExport: "No hay subtítulos para exportar.",
            errorNoSubSelected: "No hay un subtítulo seleccionado.",
            errorNoNextSub: "No hay un subtítulo siguiente para unir.",
            successSubsLoaded: "Subtítulos cargados correctamente. ✅",
            successSubAdded: "Subtítulo añadido. ✏️",
            successSubEdited: "Subtítulo editado. 📝",
            successSubDeleted: "Subtítulo eliminado. 🗑️",
            successSubSplitted: "Subtítulo separado. ✂️",
            successSubMerged: "Subtítulos unidos. 🤝",
            successSubExported: "Subtítulos exportados. 💾",
            successOffsetApplied: "Desplazamiento aplicado. ⏱️",
            successFind: "Subtítulo encontrado en el tiempo {time}.",
            successNoMoreFinds: "No se encontraron más coincidencias.",
            promptEditSub: "Edita el texto del subtítulo:",
            promptAddSub: "Introduce el texto del nuevo subtítulo:",
            donateButton: 'Donar con PayPal',
            translateButton: '🌐',
            translateTitle: 'Traducir subtítulos',
            translateDescription: 'Selecciona los idiomas de origen y de destino.',
            sourceLanguageLabel: 'Idioma de origen:',
            targetLanguageLabel: 'Idioma de destino:',
            startTranslationButton: 'Iniciar traducción',
            errorNoSubsToTranslate: 'No hay subtítulos para traducir.',
            successTranslationStarted: 'Traducción en curso...',
            successTranslationComplete: 'Traducción completada. ✅',
            errorTranslationFailed: 'Error al traducir. Por favor, inténtalo de nuevo.',
            translateDes1: 'Ten en cuenta que esta traducción utiliza una API gratuita',
            translateDes2: 'Con un límite de 10,000 palabras o solicitudes al mes',
            translateDescription: 'Selecciona los idiomas de origen y de destino',
            settingsTitle: 'Ajustes',
            uiLanguageLabel: 'Idioma de la UI:',
            themeLabel: 'Tema:',
            darkTheme: 'Oscuro',
            lightTheme: 'Claro',
            closeButton: 'Cerrar'
        },
        en: {
            title: "Naomi Sub Sync",
            settingsButton: "⚙️ Settings",
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
            findLabel: "Find:",
            findPlaceholder: "Text to find...",
            findButton: "🔎 Find",
            findNextButton: "⏭ Next",
            saveButton: "Save",
            cancelButton: "Cancel",
            errorNoVideo: "⚠️ Please load a video first to associate subtitles.",
            errorInvalidSubtitles: "No valid subtitles were found.",
            errorParsingFile: "Error parsing file: ",
            errorNoTextOrVideo: "Enter text and ensure a video is loaded.",
            errorNoSubsToExport: "There are no subtitles to export.",
            errorNoSubSelected: "No subtitle is selected.",
            errorNoNextSub: "No next subtitle to merge with.",
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
            translateDescription: 'Select source and target languages.',
            settingsTitle: 'Settings',
            uiLanguageLabel: 'UI Language:',
            themeLabel: 'Theme:',
            darkTheme: 'Dark',
            lightTheme: 'Light',
            closeButton: 'Close'
        }
    };

    // --- Variables y Estado Global ---
    let subtitles = [];
    let videoDuration = 0;
    let pixelsPerSecond = 100;
    const videoFrameRate = 30;
    const snapInterval = 1 / videoFrameRate;
    const MIN_SUB_DURATION = 0.1;
    let activeSubtitleIndex = null;
    let autoScrollEnabled = false;
    let animationFrameId = null;
    let history = [];
    let historyIndex = -1;
    const maxHistorySize = 50;
    let currentLanguage = 'es';
    let lastFoundIndex = -1;
    let isAddingNewSubtitle = false;

    // --- Selectores del DOM (Cacheados para mejor rendimiento) ---
    const video = document.getElementById('video');
    const subtitleOverlay = document.getElementById('subtitle-overlay');
    const timelineWrapper = document.getElementById('timeline-wrapper');
    const timeRuler = document.getElementById('time-ruler');
    const timelineContainer = document.getElementById('timeline-container');
    const timeline = document.getElementById('timeline');
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
    const findInput = document.getElementById('find-input');
    const findBtn = document.getElementById('find-btn');
    const findNextBtn = document.getElementById('find-next-btn');

    // Controles en la línea de tiempo
    const addSubBtnTimeline = document.getElementById('add-sub-btn-timeline');
    const editSubBtnTimeline = document.getElementById('edit-sub-btn-timeline');
    const deleteSubBtnTimeline = document.getElementById('delete-sub-btn-timeline');
    const mergeSubBtnTimeline = document.getElementById('merge-sub-btn-timeline');

    // UI Editor de texto flotante
    const editPopup = document.getElementById('edit-popup');
    const editPopupTextarea = document.getElementById('edit-popup-text');
    const saveEditBtn = document.getElementById('save-edit-btn');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');

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

    // API de MyMemory para traducción
    const myMemoryApiUrl = 'https://api.mymemory.translated.net/get?q=';
    const availableLanguages = {
        "es": "Español",
        "en": "English",
        "fr": "Français",
        "de": "Deutsch",
        "it": "Italiano",
        "pt": "Português",
        "ru": "Русский",
        "ja": "日本語",
        "zh": "中文",
        "ko": "한국어"
    };


    // --- Funciones de Utilidad ---
    const setLanguage = (lang) => {
        currentLanguage = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        const titles = document.querySelectorAll('[data-i18n-title]');
        titles.forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (translations[lang][key]) {
                el.title = translations[lang][key];
            }
        });
        // También actualiza las opciones del selector de tema
        document.querySelector('#theme-switcher option[value="dark"]').textContent = translations[lang]['darkTheme'];
        document.querySelector('#theme-switcher option[value="light"]').textContent = translations[lang]['lightTheme'];
        document.title = translations[lang]['title'];
    };

    // Función para cambiar el tema
    const setTheme = (theme) => {
        document.body.classList.toggle('dark-theme', theme === 'dark');
        document.body.classList.toggle('light-theme', theme === 'light');
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
                subs.push({
                    index: parseInt(index),
                    start: startTime,
                    end: endTime,
                    text: text.trim(),
                    track: 0
                });
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
            throw new Error(translations[currentLanguage].errorParsingFile + 'Not a valid VTT file. Missing WEBVTT header.');
        }
        let i = 1;
        while (i < lines.length) {
            if (lines[i].trim() === '' || lines[i].startsWith('NOTE')) { i++; continue; }
            if (!lines[i].includes('-->')) { i++; continue; }

            const [start, end] = lines[i].split('-->').map(t => t.trim());
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
                subs.push({
                    index: subs.length + 1,
                    start: startTime,
                    end: endTime,
                    text: text.trim(),
                    track: 0
                });
            }
            i++;
        }
        return subs;
    };

    const vttTimeToSeconds = (time) => {
        const parts = time.split(/[:.]/);
        if (parts.length === 3) {
            const [minutes, seconds, ms] = parts.map(Number);
            return minutes * 60 + seconds + ms / 1000;
        } else if (parts.length === 4) {
            const [hours, minutes, seconds, ms] = parts.map(Number);
            return hours * 3600 + minutes * 60 + seconds + ms / 1000;
        }
        return NaN;
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

    const showMessage = (msgKey, isError = false, ...args) => {
        let msg = translations[currentLanguage][msgKey] || msgKey;
        for (let i = 0; i < args.length; i++) {
            msg = msg.replace(`{${i}}`, args[i]);
        }
        errorMessage.textContent = msg;
        errorMessage.style.color = isError ? 'var(--error-color)' : 'var(--text-color)';
        errorMessage.style.display = 'block';
        if (!isError) {
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    };

    const clearMessage = () => {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    };

    // --- Lógica del Historial ---
    const saveHistory = () => {
        if (historyIndex < history.length - 1) {
            history = history.slice(0, historyIndex + 1);
        }
        const state = {
            subtitles: JSON.parse(JSON.stringify(subtitles)),
            activeSubtitleIndex: activeSubtitleIndex
        };
        history.push(state);
        if (history.length > maxHistorySize) {
            history.shift();
        }
        historyIndex = history.length - 1;
        updateHistoryButtons();
    };

    const undo = () => {
        if (historyIndex > 0) {
            historyIndex--;
            const prevState = history[historyIndex];
            subtitles = JSON.parse(JSON.stringify(prevState.subtitles));
            activeSubtitleIndex = prevState.activeSubtitleIndex;
            renderTimeline();
            updateHistoryButtons();
        }
    };

    const redo = () => {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            const nextState = history[historyIndex];
            subtitles = JSON.parse(JSON.stringify(nextState.subtitles));
            activeSubtitleIndex = nextState.activeSubtitleIndex;
            renderTimeline();
            updateHistoryButtons();
        }
    };

    const updateHistoryButtons = () => {
        undoBtn.disabled = history.length <= 1 || historyIndex <= 0;
        redoBtn.disabled = historyIndex >= history.length - 1;
    };

    const populateLanguages = () => {
        // Limpia los selectores para evitar duplicados
        sourceLangSelect.innerHTML = '';
        targetLangSelect.innerHTML = '';

        for (const langCode in availableLanguages) {
            const optionSource = document.createElement('option');
            optionSource.value = langCode;
            optionSource.textContent = availableLanguages[langCode];
            sourceLangSelect.appendChild(optionSource);

            const optionTarget = document.createElement('option');
            optionTarget.value = langCode;
            optionTarget.textContent = availableLanguages[langCode];
            targetLangSelect.appendChild(optionTarget);
        }
        // Selecciona un idioma por defecto para cada selector
        const userLang = navigator.language.split('-')[0];
        if (availableLanguages[userLang]) {
            sourceLangSelect.value = userLang === 'es' ? 'en' : userLang; // Default source to English if UI is Spanish
            targetLangSelect.value = userLang;
        } else {
             sourceLangSelect.value = 'en'; // Default to English
             targetLangSelect.value = 'es'; // Default to Spanish
        }
    };

    // --- Lógica de la Interfaz y el Video ---
    const renderTimeline = () => {
        timeline.innerHTML = '';
        timeRuler.innerHTML = '';
        if (!videoDuration) {
            editSubBtnTimeline.disabled = true;
            deleteSubBtnTimeline.disabled = true;
            mergeSubBtnTimeline.disabled = true;
            return;
        }

        const timelineWidth = videoDuration * pixelsPerSecond;
        timeline.style.width = `${timelineWidth}px`;
        timeRuler.style.width = `${timelineWidth}px`;
        waveformCanvas.width = timelineWidth;

        // Nuevo: Renderizar el waveform
        if (audioBuffer) {
            drawWaveform();
        }

        const niceIntervals = [1, 2, 5, 10, 30, 60, 120, 300, 600];
        let interval = 1;
        for (const nice of niceIntervals) {
            if (nice * pixelsPerSecond > 50) {
                interval = nice;
                break;
            }
        }

        // Renderizar la regla de tiempo
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

        // Determinar cuántas pistas se necesitan para evitar solapamientos
        const sortedSubs = [...subtitles].sort((a, b) => a.start - b.start);
        const tracks = [];
        sortedSubs.forEach(sub => {
            let foundTrack = -1;
            for (let i = 0; i < tracks.length; i++) {
                const lastSubInTrack = tracks[i][tracks[i].length - 1];
                if (sub.start >= lastSubInTrack.end) {
                    foundTrack = i;
                    break;
                }
            }
            if (foundTrack !== -1) {
                sub.track = foundTrack;
                tracks[foundTrack].push(sub);
            } else {
                sub.track = tracks.length;
                tracks.push([sub]);
            }
        });

        // Crear las pistas de la línea de tiempo
        const waveformTrack = document.getElementById('waveform-track');
        if (waveformTrack) {
            timeline.appendChild(waveformTrack);
        }
        for (let i = 0; i < tracks.length + 1; i++) {
            const trackDiv = document.createElement('div');
            trackDiv.className = 'subtitle-track';
            timeline.appendChild(trackDiv);
        }

        // Renderizar los bloques de subtítulos
        subtitles.forEach((sub, idx) => {
            const trackDiv = timeline.querySelector(`.subtitle-track:nth-child(${sub.track + 2})`); // +2 por la pista del waveform
            if (!trackDiv) return;

            const block = document.createElement('div');
            block.className = 'subtitle-block';
            block.classList.toggle('active', idx === activeSubtitleIndex);

            const leftPos = sub.start * pixelsPerSecond;
            const width = (sub.end - sub.start) * pixelsPerSecond;

            block.style.left = `${leftPos}px`;
            block.style.width = `${Math.max(width, 20)}px`;
            block.dataset.index = idx;
            block.innerHTML = `<div class="handle left"></div><span class="sub-text">${sub.text}</span><div class="handle right"></div>`;
            block.title = `${formatSRTTime(sub.start)} --> ${formatSRTTime(sub.end)}\n${sub.text}`;
            trackDiv.appendChild(block);
        });

        deleteSubBtnTimeline.disabled = activeSubtitleIndex === null;
        editSubBtnTimeline.disabled = activeSubtitleIndex === null;
        mergeSubBtnTimeline.disabled = activeSubtitleIndex === null || activeSubtitleIndex >= subtitles.length - 1;
        updateUIBasedOnTime();
    };

    const updateUIBasedOnTime = () => {
        if (!videoDuration) return;

        const currentTime = video.currentTime;
        const newLeft = currentTime * pixelsPerSecond;
        currentTimeIndicator.style.left = `${newLeft}px`;

        const activeSub = subtitles.find(sub => sub.start <= currentTime && sub.end >= currentTime);
        subtitleOverlay.textContent = activeSub ? activeSub.text : '';

        if (autoScrollEnabled) {
            autoScrollTimeline();
        }
    };

    const autoScrollTimeline = () => {
        const currentTime = video.currentTime;
        const scrollPos = currentTime * pixelsPerSecond - timelineContainer.offsetWidth / 2;
        timelineContainer.scrollLeft = Math.max(0, scrollPos);
    };

    const animateTimeline = () => {
        if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
        }
        if (video.paused || video.ended) {
            return;
        }
        updateUIBasedOnTime();
        animationFrameId = requestAnimationFrame(animateTimeline);
    };

    // Nuevo: Procesamiento del audio y renderizado del waveform
    const processAudio = (file) => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const reader = new FileReader();

        reader.onload = async (e) => {
            try {
                audioBuffer = await audioContext.decodeAudioData(e.target.result);
                drawWaveform();
            } catch (err) {
                console.error('Error decoding audio data:', err);
            }
        };
        reader.readAsArrayBuffer(file);
    };

    const drawWaveform = () => {
        if (!audioBuffer) return;
        const timelineWidth = videoDuration * pixelsPerSecond;
        const canvasWidth = waveformCanvas.width;
        const canvasHeight = waveformCanvas.height;

        waveformCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        waveformCtx.fillStyle = 'var(--waveform-color)';

        const data = audioBuffer.getChannelData(0);
        const step = Math.floor(data.length / canvasWidth);
        const amp = canvasHeight / 2;

        for (let i = 0; i < canvasWidth; i++) {
            let min = 1.0;
            let max = -1.0;
            for (let j = 0; j < step; j++) {
                const datum = data[(i * step) + j];
                if (datum < min) min = datum;
                if (datum > max) max = datum;
            }
            waveformCtx.fillRect(i, (1 + min) * amp, 1, Math.max(1, (max - min) * amp));
        }
    };

    const handleVideoLoad = () => {
        videoDuration = video.duration;
        subtitles = [];
        history.length = 0;
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
        findNextBtn.disabled = true;

        // Nuevo: procesar el audio del video para el waveform
        const videoFileObj = videoFile.files[0];
        if (videoFileObj) {
            processAudio(videoFileObj);
        }
    };

    const findAndJump = (startIndex, wrapAround = false) => {
        const findText = findInput.value.trim().toLowerCase();
        if (!findText) {
            return;
        }

        let foundIndex = -1;
        const subsToSearch = subtitles.slice(startIndex);

        let sub = subsToSearch.find(sub => sub.text.toLowerCase().includes(findText));
        if (sub) {
            foundIndex = subtitles.indexOf(sub);
        } else if (wrapAround) {
            const subsToSearchFromStart = subtitles.slice(0, startIndex);
            sub = subsToSearchFromStart.find(sub => sub.text.toLowerCase().includes(findText));
            if (sub) {
                foundIndex = subtitles.indexOf(sub);
            }
        }

        if (foundIndex !== -1) {
            video.currentTime = subtitles[foundIndex].start;
            activeSubtitleIndex = foundIndex;
            lastFoundIndex = foundIndex;
            renderTimeline();
            showMessage('successFind', false, formatSRTTime(subtitles[foundIndex].start));
            findNextBtn.disabled = false;
        } else {
            showMessage('successNoMoreFinds');
            findNextBtn.disabled = true;
        }
    };

    // --- Gestión de Eventos del DOM ---
    video.addEventListener('play', () => {
        animateTimeline();
        playPauseBtn.textContent = '❚❚';
    });
    video.addEventListener('pause', () => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
        playPauseBtn.textContent = '▶';
    });
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

        if (!videoDuration) {
            showMessage('errorNoVideo', true);
            return;
        }

        const reader = new FileReader();
        const fileExtension = file.name.split('.').pop().toLowerCase();

        reader.onload = () => {
            try {
                subtitles = fileExtension === 'srt' ? parseSRT(reader.result) : parseVTT(reader.result);

                if (subtitles.length === 0) {
                    showMessage('errorInvalidSubtitles', true);
                } else {
                    history = [];
                    historyIndex = -1;
                    activeSubtitleIndex = null;
                    saveHistory();
                    renderTimeline();
                    showMessage('successSubsLoaded');
                }
            } catch (err) {
                showMessage('errorParsingFile', true);
            }
        };
        reader.readAsText(file);
    });

    // Event listener para el botón de añadir del timeline
    addSubBtnTimeline.addEventListener('click', () => {
        if (!videoDuration) {
            showMessage('errorNoVideo', true);
            return;
        }
        isAddingNewSubtitle = true;
        editPopupTextarea.value = '';
        editPopupTextarea.placeholder = translations[currentLanguage].promptAddSub;
        editPopup.style.display = 'block';
        editPopupTextarea.focus();
    });

    // Event listener para el botón de editar del timeline
    editSubBtnTimeline.addEventListener('click', () => {
        if (activeSubtitleIndex !== null) {
            isAddingNewSubtitle = false;
            editPopupTextarea.value = subtitles[activeSubtitleIndex].text;
            editPopupTextarea.placeholder = translations[currentLanguage].promptEditSub;
            editPopup.style.display = 'block';
            editPopupTextarea.focus();
        } else {
             showMessage('errorNoSubSelected', true);
        }
    });

    mergeSubBtnTimeline.addEventListener('click', () => {
        if (activeSubtitleIndex === null) {
            showMessage('errorNoSubSelected', true);
            return;
        }
        const currentSub = subtitles[activeSubtitleIndex];
        const nextSub = subtitles[activeSubtitleIndex + 1];

        if (!nextSub) {
             showMessage('errorNoNextSub', true);
             return;
        }

        currentSub.end = nextSub.end;
        currentSub.text += '\n' + nextSub.text;
        subtitles.splice(activeSubtitleIndex + 1, 1);
        saveHistory();
        renderTimeline();
        showMessage('successSubMerged');
    });

    deleteSubBtnTimeline.addEventListener('click', () => {
        if (activeSubtitleIndex !== null) {
            subtitles.splice(activeSubtitleIndex, 1);
            activeSubtitleIndex = null;
            saveHistory();
            renderTimeline();
            showMessage('successSubDeleted');
        }
    });

    saveEditBtn.addEventListener('click', () => {
        const newText = editPopupTextarea.value.trim();
        if (!newText) {
            showMessage('errorNoTextOrVideo', true);
            return;
        }

        if (isAddingNewSubtitle) {
            const currentTime = video.currentTime;
            const newSub = {
                start: snapTime(currentTime),
                end: snapTime(currentTime + 2),
                text: newText,
                track: 0
            };
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

    cancelEditBtn.addEventListener('click', () => {
        editPopup.style.display = 'none';
    });

    exportBtn.addEventListener('click', async () => {
        if (subtitles.length === 0) {
            showMessage('errorNoSubsToExport', true);
            return;
        }

        const format = exportFormatSelect.value;
        let content = '';
        let filename = '';

        if (format === 'srt') {
            content = subtitles.map((s, i) =>
                `${i + 1}\n${formatSRTTime(s.start)} --> ${formatSRTTime(s.end)}\n${s.text}\n`
            ).join('\n');
            filename = 'subtitles_edited.srt';
        } else if (format === 'vtt') {
            content = 'WEBVTT\n\n' + subtitles.map((s) =>
                `${formatVTTTime(s.start)} --> ${formatVTTTime(s.end)}\n${s.text}\n`
            ).join('\n\n');
            filename = 'subtitles_edited.vtt';
        }

        try {
            // Intenta usar la API de Acceso al Sistema de Archivos
            if ('showSaveFilePicker' in window) {
                const handle = await window.showSaveFilePicker({
                    suggestedName: filename,
                    types: [{
                        description: `Archivo de subtítulos (${format.toUpperCase()})`,
                        accept: { 'text/plain': [`.${format}`] },
                    }],
                });
                const writable = await handle.createWritable();
                await writable.write(content);
                await writable.close();
                showMessage('successSubExported');
            } else {
                // Si la API no está disponible, usa el método tradicional
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                showMessage('successSubExported');
            }
        } catch (err) {
            console.error('Export failed:', err);
            if (err.name !== 'AbortError') {
                showMessage('Error al exportar los subtítulos.', true);
            }
        }
    });

    applyOffsetBtn.addEventListener('click', () => {
        const offset = parseFloat(offsetInput.value) / 1000;
        if (isNaN(offset) || !subtitles.length) {
            return;
        }
        subtitles.forEach(sub => {
            sub.start = Math.max(0, sub.start + offset);
            sub.end = Math.max(sub.start + MIN_SUB_DURATION, sub.end + offset);
        });
        saveHistory();
        renderTimeline();
        showMessage('successOffsetApplied');
    });

    findBtn.addEventListener('click', () => {
        findAndJump(0);
    });

    findNextBtn.addEventListener('click', () => {
        findAndJump(lastFoundIndex + 1, true);
    });

    findInput.addEventListener('keydown', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          if (e.code === 'Enter') {
              e.preventDefault();
              findAndJump(0);
          }
        }
    });

    playPauseBtn.addEventListener('click', () => video.paused ? video.play() : video.pause());
    muteUnmuteBtn.addEventListener('click', () => video.muted = !video.muted);
    volumeSlider.addEventListener('input', () => video.volume = volumeSlider.value);
    playbackRateSlider.addEventListener('input', () => {
        video.playbackRate = playbackRateSlider.value;
        playbackRateValueSpan.textContent = `${playbackRateSlider.value}x`;
    });

    document.getElementById('prev-sub-btn').addEventListener('click', () => {
        const prevSub = subtitles.slice().reverse().find(sub => sub.end < video.currentTime);
        video.currentTime = prevSub ? prevSub.start : 0;
        updateUIBasedOnTime();
    });
    document.getElementById('next-sub-btn').addEventListener('click', () => {
        const nextSub = subtitles.find(sub => sub.start > video.currentTime);
        if (nextSub) video.currentTime = nextSub.start;
        updateUIBasedOnTime();
    });
    document.getElementById('step-backward-btn').addEventListener('click', () => {
        video.currentTime = Math.max(0, video.currentTime - snapInterval);
    });
    document.getElementById('step-forward-btn').addEventListener('click', () => {
        video.currentTime = Math.min(videoDuration, video.currentTime + snapInterval);
    });

    undoBtn.addEventListener('click', undo);
    redoBtn.addEventListener('click', redo);

    autoScrollBtn.addEventListener('click', () => {
        autoScrollEnabled = !autoScrollEnabled;
        autoScrollBtn.classList.toggle('active', autoScrollEnabled);
    });

    centerTimelineBtn.addEventListener('click', () => {
        autoScrollEnabled = false;
        autoScrollBtn.classList.remove('active');
        autoScrollTimeline();
    });

    zoomSlider.addEventListener('input', () => {
        const oldScrollLeft = timelineContainer.scrollLeft;
        const oldCenterTime = (oldScrollLeft + timelineContainer.offsetWidth / 2) / pixelsPerSecond;
        pixelsPerSecond = parseInt(zoomSlider.value);
        zoomValueSpan.textContent = zoomSlider.value;
        renderTimeline();
        const newScrollLeft = oldCenterTime * pixelsPerSecond - timelineContainer.offsetWidth / 2;
        timelineContainer.scrollLeft = Math.max(0, newScrollLeft);
        updateUIBasedOnTime();
    });

    zoomInBtn.addEventListener('click', () => {
        zoomSlider.value = Math.min(parseInt(zoomSlider.value) + 20, 500);
        zoomSlider.dispatchEvent(new Event('input'));
    });
    zoomOutBtn.addEventListener('click', () => {
        zoomSlider.value = Math.max(parseInt(zoomSlider.value) - 20, 20);
        zoomSlider.dispatchEvent(new Event('input'));
    });

    timelineContainer.addEventListener('scroll', () => {
        timeRuler.style.transform = `translateX(${-timelineContainer.scrollLeft}px)`;
        updateUIBasedOnTime();
    });

    timeRuler.addEventListener('click', (e) => {
        if (!video.duration) return;
        const clickX = e.clientX + timelineContainer.scrollLeft - timelineContainer.getBoundingClientRect().left;
        const newTime = clickX / pixelsPerSecond;
        video.currentTime = Math.max(0, Math.min(video.duration, newTime));
    });

    // Eventos del popup de traducción
    translateBtn.addEventListener('click', () => {
        if (subtitles.length === 0) {
            showMessage('errorNoSubsToTranslate', true);
            return;
        }
        populateLanguages(); // Asegura que los selectores estén llenos
        translatePopup.style.display = 'block';
        translationStatusDiv.textContent = '';
    });

    cancelTranslationBtn.addEventListener('click', () => {
        translatePopup.style.display = 'none';
    });

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

    // Eventos del popup de ajustes
    settingsBtn.addEventListener('click', () => {
        settingsPopup.style.display = 'block';
        // Sincroniza los selectores con el estado actual
        languageSwitcher.value = currentLanguage;
        themeSwitcher.value = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    });

    closeSettingsBtn.addEventListener('click', () => {
        settingsPopup.style.display = 'none';
    });

    languageSwitcher.addEventListener('change', (e) => {
        setLanguage(e.target.value);
        renderTimeline();
    });

    themeSwitcher.addEventListener('change', (e) => {
        setTheme(e.target.value);
    });

    // --- Lógica de Arrastre y Redimensionado ---
    let draggingState = {
        subtitle: null,
        resizing: null,
        timeline: null,
        timeIndicator: false,
        startX: 0,
        origStart: 0,
        origEnd: 0
    };

    timeline.addEventListener('mousedown', (e) => {
        const block = e.target.closest('.subtitle-block');
        if (block) {
            activeSubtitleIndex = parseInt(block.dataset.index);
            document.querySelectorAll('.subtitle-block').forEach(b => b.classList.remove('active'));
            block.classList.add('active');

            if (e.target.classList.contains('handle')) {
                draggingState.resizing = { block, side: e.target.classList.contains('left') ? 'left' : 'right' };
            } else {
                draggingState.subtitle = block;
            }
            draggingState.startX = e.clientX;
            draggingState.origStart = subtitles[activeSubtitleIndex].start;
            draggingState.origEnd = subtitles[activeSubtitleIndex].end;
            e.preventDefault();
        } else {
            document.querySelectorAll('.subtitle-block').forEach(b => b.classList.remove('active'));
            activeSubtitleIndex = null;
            deleteSubBtnTimeline.disabled = true;
            editSubBtnTimeline.disabled = true;
            mergeSubBtnTimeline.disabled = true;
            draggingState.timeline = timeline;
            draggingState.startX = e.clientX;
            draggingState.startScrollLeft = timelineContainer.scrollLeft;
            timeline.classList.add('dragging');
            e.preventDefault();
        }
    });

    currentTimeIndicator.addEventListener('mousedown', (e) => {
        draggingState.timeIndicator = true;
        video.pause();
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (draggingState.subtitle) {
            const dx = (e.clientX - draggingState.startX) / pixelsPerSecond;
            const dur = subtitles[activeSubtitleIndex].end - subtitles[activeSubtitleIndex].start;
            let newStart = snapTime(draggingState.origStart + dx);

            subtitles[activeSubtitleIndex].start = Math.max(0, newStart);
            subtitles[activeSubtitleIndex].end = subtitles[activeSubtitleIndex].start + dur;
            renderTimeline();
        } else if (draggingState.resizing) {
            const dx = (e.clientX - draggingState.startX) / pixelsPerSecond;
            let newStart = draggingState.origStart;
            let newEnd = draggingState.origEnd;

            if (draggingState.resizing.side === 'left') {
                newStart = snapTime(newStart + dx);
            } else {
                newEnd = snapTime(newEnd + dx);
            }

            subtitles[activeSubtitleIndex].start = Math.max(0, Math.min(newEnd - MIN_SUB_DURATION, newStart));
            subtitles[activeSubtitleIndex].end = Math.min(videoDuration, Math.max(newStart + MIN_SUB_DURATION, newEnd));
            renderTimeline();
        } else if (draggingState.timeline) {
            const dx = draggingState.startX - e.clientX;
            timelineContainer.scrollLeft = draggingState.startScrollLeft + dx;
        } else if (draggingState.timeIndicator) {
            const timelineRect = timelineContainer.getBoundingClientRect();
            const mouseX = e.clientX - timelineRect.left;
            const newTime = (timelineContainer.scrollLeft + mouseX) / pixelsPerSecond;
            video.currentTime = Math.max(0, Math.min(videoDuration, newTime));
        }
    });

    document.addEventListener('mouseup', () => {
        if (draggingState.subtitle || draggingState.resizing || draggingState.timeline) {
            saveHistory();
            renderTimeline();
        }
        draggingState.subtitle = null;
        draggingState.resizing = null;
        draggingState.timeline = null;
        draggingState.timeIndicator = false;
        timeline.classList.remove('dragging');
    });

    timeline.addEventListener('dblclick', (e) => {
        const block = e.target.closest('.subtitle-block');
        if (block) {
            activeSubtitleIndex = parseInt(block.dataset.index);
            editSubBtnTimeline.click();
        }
    });

    // --- Atajos de Teclado ---
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        if (e.code === 'Space') {
            e.preventDefault();
            video.paused ? video.play() : video.pause();
        } else if (e.code === 'ArrowLeft') {
            video.currentTime = Math.max(0, video.currentTime - snapInterval);
        } else if (e.code === 'ArrowRight') {
            video.currentTime = Math.min(videoDuration, video.currentTime + snapInterval);
        } else if (e.code === 'Delete' || e.code === 'Backspace') {
            deleteSubBtnTimeline.click();
        } else if (e.code === 'Equal' || e.code === 'NumpadAdd') {
            zoomInBtn.click();
        } else if (e.code === 'Minus' || e.code === 'NumpadSubtract') {
            zoomOutBtn.click();
        } else if (e.ctrlKey && e.shiftKey && e.code === 'KeyM') {
            e.preventDefault();
            mergeSubBtnTimeline.click();
        } else if (e.ctrlKey && e.code === 'KeyZ') {
            e.preventDefault();
            undo();
        } else if (e.ctrlKey && e.code === 'KeyY') {
            e.preventDefault();
            redo();
        } else if (e.ctrlKey && e.code === 'KeyS') {
            e.preventDefault();
            exportBtn.click();
        }
    });

    // --- Inicialización ---
    setLanguage('es');
    volumeValueSpan.textContent = `${Math.round(video.volume * 100)}%`;
    playbackRateValueSpan.textContent = `${video.playbackRate}x`;
    zoomValueSpan.textContent = `${zoomSlider.value}`;
    currentTimeIndicator.style.display = 'none';

    // CORRECCIÓN: Asegura que los popups estén ocultos al cargar la página
    editPopup.style.display = 'none';
    translatePopup.style.display = 'none';
    settingsPopup.style.display = 'none';

    renderTimeline();
});