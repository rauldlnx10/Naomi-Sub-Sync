document.addEventListener('DOMContentLoaded', () => {

    // --- State and Variables ---
    const State = {
        subtitles: [],
        videoDuration: 0,
        pixelsPerSecond: 100,
        activeSubtitleIndex: null,
        autoScrollEnabled: false,
        animationFrameId: null,
        history: [],
        historyIndex: -1,
        currentLanguage: 'es',
        theme: 'dark',
        frameRate: 30,
        lastFoundIndex: -1,
        isAddingNewSubtitle: false,
        localStorageKey: 'subsync_state',
        autosaveInterval: null,
        autosaveActive: true,
        waveformData: null,
        myMemoryApiUrl: 'https://api.mymemory.translated.net/get?q=',
        availableLanguages: {
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
        },
        translations: {
            es: {
                title: "SubSync Avanzado",
                settingsButton: "⚙️ Ajustes",
                loadVideo: "📽 Cargar Video",
                loadSubs: "📄 Cargar Subtítulos",
                addButton: "Añadir",
                editButton: "Editar",
                deleteButton: "Eliminar",
                splitButton: "Separar",
                splitTitle: "Separar subtítulo en la posición actual (Ctrl+Shift+S)",
                mergeButton: "Unir",
                mergeTitle: "Unir subtítulo seleccionado con el siguiente (Ctrl+Shift+M)",
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
                loadWaveform: 'Cargando forma de onda...',
                waveformLoaded: 'Forma de onda cargada. ✅',
                errorWaveform: 'Error al procesar la forma de onda del audio.',
                autoSave: 'Autoguardado... 💾',
                autoSaveComplete: 'Estado guardado automáticamente. ✅',
                loadSavedState: 'Cargando estado guardado... 🔄',
                loadSavedStateComplete: 'Estado recuperado. ✅',
                tooltipSubText: 'Texto: ',
                settingsTitle: 'Ajustes',
                enableAutosaveLabel: 'Activar Autoguardado',
                closeButton: 'Cerrar',
                languageLabel: 'Idioma:',
                themeLabel: 'Tema:',
                darkTheme: 'Oscuro',
                lightTheme: 'Claro',
                frameRateLabel: 'Fotogramas por segundo (FPS):'
            },
            en: {
                title: "Advanced SubSync",
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
                errorTranslationFailed: 'Translation failed. Please try again.',
                errorNoSubsToTranslate: 'No subtitles to translate.',
                successTranslationStarted: 'Translation in progress...',
                successTranslationComplete: 'Translation complete. ✅',
                translateDes1: 'Keep in mind that this translation uses a free API.',
                translateDes2: 'With a limit of 10,000 words or requests per month.',
                loadWaveform: 'Loading waveform...',
                waveformLoaded: 'Waveform loaded. ✅',
                errorWaveform: 'Error processing audio waveform.',
                autoSave: 'Autosaving... 💾',
                autoSaveComplete: 'State saved automatically. ✅',
                loadSavedState: 'Loading saved state... 🔄',
                loadSavedStateComplete: 'State restored. ✅',
                tooltipSubText: 'Text: ',
                settingsTitle: 'Settings',
                enableAutosaveLabel: 'Enable Autosave',
                closeButton: 'Close',
                languageLabel: 'Language:',
                themeLabel: 'Theme:',
                darkTheme: 'Dark',
                lightTheme: 'Light',
                frameRateLabel: 'Frames per second (FPS):'
            },
            it: {
                title: "SubSync Avanzato",
                settingsButton: "⚙️ Impostazioni",
                loadVideo: "📽 Carica Video",
                loadSubs: "📄 Carica Sottotitoli",
                addButton: "Aggiungi",
                editButton: "Modifica",
                deleteButton: "Elimina",
                splitButton: "Dividi",
                splitTitle: "Dividi il sottotitolo nella posizione attuale (Ctrl+Shift+S)",
                mergeButton: "Unisci",
                mergeTitle: "Unisci il sottotitolo selezionato con il successivo (Ctrl+Shift+M)",
                exportButton: "🡻 Esporta",
                playPauseTitle: "Riproduci/Pausa",
                prevSubTitle: "Vai al sottotitolo precedente",
                stepBackwardTitle: "Indietro di 1 fotogramma",
                stepForwardTitle: "Avanti di 1 fotogramma",
                nextSubTitle: "Vai al sottotitolo successivo",
                muteUnmuteTitle: "Disattiva/Attiva audio",
                volumeTitle: "Volume",
                playbackRateLabel: "Velocità:",
                playbackRateTitle: "Velocità di riproduzione",
                zoomLabel: "Zoom:",
                zoomOutTitle: "Riduci zoom",
                zoomInTitle: "Aumenta zoom",
                centerTitle: "Centra sull'ora attuale",
                autoScrollTitle: "Abilita/Disabilita lo scorrimento automatico",
                undoTitle: "Annulla (Ctrl+Z)",
                redoTitle: "Ripeti (Ctrl+Y)",
                offsetLabel: "Sposta:",
                offsetTitle: "Sposta tutti i sottotitoli in ms",
                applyOffsetButton: "Applica",
                findLabel: "Cerca:",
                findPlaceholder: "Testo da cercare...",
                findButton: "🔎 Cerca",
                findNextButton: "⏭ Successivo",
                saveButton: "Salva",
                cancelButton: "Annulla",
                errorNoVideo: "⚠️ Carica prima un video per associare i sottotitoli.",
                errorInvalidSubtitles: "Non sono stati trovati sottotitoli validi.",
                errorParsingFile: "Errore durante l'analisi del file: ",
                errorNoTextOrVideo: "Inserisci un testo e assicurati che sia stato caricato un video.",
                errorNoSubsToExport: "Non ci sono sottotitoli da esportare.",
                errorNoSubSelected: "Nessun sottotitolo selezionato.",
                errorNoNextSub: "Nessun sottotitolo successivo con cui unire.",
                successSubsLoaded: "Sottotitoli caricati con successo. ✅",
                successSubAdded: "Sottotitolo aggiunto. ✏️",
                successSubEdited: "Sottotitolo modificato. 📝",
                successSubDeleted: "Sottotitolo eliminato. 🗑️",
                successSubSplitted: "Sottotitolo diviso. ✂️",
                successSubMerged: "Sottotitoli uniti. 🤝",
                successSubExported: "Sottotitoli esportati. 💾",
                successOffsetApplied: "Spostamento applicato. ⏱️",
                successFind: "Sottotitolo trovato al tempo {time}.",
                successNoMoreFinds: "Nessun'altra corrispondenza trovata.",
                promptEditSub: "Modifica il testo del sottotitolo:",
                promptAddSub: "Inserisci il testo per il nuovo sottotitolo:",
                donateButton: 'Dona con PayPal',
                translateButton: '🌐',
                translateTitle: 'Traduci sottotitoli',
                translateDes1: 'Tieni presente che questa traduzione utilizza un’API gratuita',
                translateDes2: 'Con un limite di 10.000 parole o richieste al mese',
                translateDescription: 'Seleziona le lingue di origine e di destinazione',
                sourceLanguageLabel: 'Lingua di origine:',
                targetLanguageLabel: 'Lingua di destinazione:',
                startTranslationButton: 'Avvia traduzione',
                errorNoSubsToTranslate: 'Non ci sono sottotitoli da tradurre.',
                successTranslationStarted: 'Traduzione in corso...',
                successTranslationComplete: 'Traduzione completata. ✅',
                errorTranslationFailed: 'Traduzione fallita. Riprova per favore.',
                loadWaveform: 'Caricamento della forma d\'onda...',
                waveformLoaded: 'Forma d\'onda caricata. ✅',
                errorWaveform: 'Errore nell\'elaborazione della forma d\'onda audio.',
                autoSave: 'Salvataggio automatico... 💾',
                autoSaveComplete: 'Stato salvato automaticamente. ✅',
                loadSavedState: 'Caricamento stato salvato... 🔄',
                loadSavedStateComplete: 'Stato ripristinato. ✅',
                tooltipSubText: 'Testo: ',
                settingsTitle: 'Impostazioni',
                enableAutosaveLabel: 'Abilita salvataggio automatico',
                closeButton: 'Chiudi',
                languageLabel: 'Lingua:',
                themeLabel: 'Tema:',
                darkTheme: 'Scuro',
                lightTheme: 'Chiaro',
                frameRateLabel: 'Fotogrammi al secondo (FPS):'
            },
            ja: {
                title: "高度なSubSync",
                settingsButton: "⚙️ 設定",
                loadVideo: "📽 ビデオをロード",
                loadSubs: "📄 字幕をロード",
                addButton: "追加",
                editButton: "編集",
                deleteButton: "削除",
                splitButton: "分割",
                splitTitle: "現在の位置で字幕を分割 (Ctrl+Shift+S)",
                mergeButton: "結合",
                mergeTitle: "選択した字幕を次の字幕と結合 (Ctrl+Shift+M)",
                exportButton: "🡻 エクスポート",
                playPauseTitle: "再生/一時停止",
                prevSubTitle: "前の字幕へ",
                stepBackwardTitle: "1フレーム戻る",
                stepForwardTitle: "1フレーム進む",
                nextSubTitle: "次の字幕へ",
                muteUnmuteTitle: "ミュート/ミュート解除",
                volumeTitle: "音量",
                playbackRateLabel: "速度:",
                playbackRateTitle: "再生速度",
                zoomLabel: "ズーム:",
                zoomOutTitle: "ズームアウト",
                zoomInTitle: "ズームイン",
                centerTitle: "現在の時間に中央揃え",
                autoScrollTitle: "自動スクロールを有効/無効",
                undoTitle: "元に戻す (Ctrl+Z)",
                redoTitle: "やり直し (Ctrl+Y)",
                offsetLabel: "オフセット:",
                offsetTitle: "すべての字幕をミリ秒単位でオフセット",
                applyOffsetButton: "適用",
                findLabel: "検索:",
                findPlaceholder: "検索するテキスト...",
                findButton: "🔎 検索",
                findNextButton: "⏭ 次へ",
                saveButton: "保存",
                cancelButton: "キャンセル",
                errorNoVideo: "⚠️ まずビデオをロードして字幕を関連付けてください。",
                errorInvalidSubtitles: "有効な字幕が見つかりませんでした。",
                errorParsingFile: "ファイルの解析エラー: ",
                errorNoTextOrVideo: "テキストを入力し、ビデオがロードされていることを確認してください。",
                errorNoSubsToExport: "エクスポートする字幕がありません。",
                errorNoSubSelected: "字幕が選択されていません。",
                errorNoNextSub: "結合する次の字幕がありません。",
                successSubsLoaded: "字幕が正常にロードされました。 ✅",
                successSubAdded: "字幕が追加されました。 ✏️",
                successSubEdited: "字幕が編集されました。 📝",
                successSubDeleted: "字幕が削除されました。 🗑️",
                successSubSplitted: "字幕が分割されました。 ✂️",
                successSubMerged: "字幕が結合されました。 🤝",
                successSubExported: "字幕がエクスポートされました。 💾",
                successOffsetApplied: "オフセットが適用されました。 ⏱️",
                successFind: "字幕が {time} で見つかりました。",
                successNoMoreFinds: "これ以上の一致は見つかりませんでした。",
                promptEditSub: "字幕テキストを編集:",
                promptAddSub: "新しい字幕のテキストを入力:",
                donateButton: 'PayPalで寄付',
                translateButton: '🌐',
                translateTitle: '字幕を翻訳',
                translateDes1: 'この翻訳は無料APIを使用しています',
                translateDes2: '1ヶ月あたり10,000語またはリクエストの制限があります',
                translateDescription: '元の言語とターゲット言語を選択してください',
                sourceLanguageLabel: '元の言語:',
                targetLanguageLabel: 'ターゲット言語:',
                startTranslationButton: '翻訳を開始',
                errorNoSubsToTranslate: '翻訳する字幕がありません。',
                successTranslationStarted: '翻訳中です...',
                successTranslationComplete: '翻訳が完了しました。 ✅',
                errorTranslationFailed: '翻訳に失敗しました。もう一度お試しください。',
                loadWaveform: '波形を読み込み中...',
                waveformLoaded: '波形がロードされました。 ✅',
                errorWaveform: '音声波形の処理エラー。',
                autoSave: '自動保存中... 💾',
                autoSaveComplete: '状態が自動的に保存されました。 ✅',
                loadSavedState: '保存された状態を読み込み中... 🔄',
                loadSavedStateComplete: '状態が復元されました。 ✅',
                tooltipSubText: 'テキスト: ',
                settingsTitle: '設定',
                enableAutosaveLabel: '自動保存を有効にする',
                closeButton: '閉じる',
                languageLabel: '言語:',
                themeLabel: 'テーマ:',
                darkTheme: 'ダーク',
                lightTheme: 'ライト',
                frameRateLabel: '1秒あたりのフレーム数 (FPS):'
            }
        }
    };

    // --- DOM Elements (cached for performance) ---
    const DOM = {
        video: document.getElementById('video'),
        subtitleOverlay: document.getElementById('subtitle-overlay'),
        timelineWrapper: document.getElementById('timeline-wrapper'),
        timeRuler: document.getElementById('time-ruler'),
        timelineContainer: document.getElementById('timeline-container'),
        timeline: document.getElementById('timeline'),
        currentTimeIndicator: document.getElementById('current-time'),
        videoFile: document.getElementById('video-file'),
        subtitleFile: document.getElementById('subtitle-file'),
        exportFormatSelect: document.getElementById('export-format'),
        exportBtn: document.getElementById('export-btn'),
        playPauseBtn: document.getElementById('play-pause-btn'),
        prevSubBtn: document.getElementById('prev-sub-btn'),
        stepBackwardBtn: document.getElementById('step-backward-btn'),
        stepForwardBtn: document.getElementById('step-forward-btn'),
        nextSubBtn: document.getElementById('next-sub-btn'),
        muteUnmuteBtn: document.getElementById('mute-unmute-btn'),
        volumeSlider: document.getElementById('volume-slider'),
        volumeValueSpan: document.getElementById('volume-value'),
        playbackRateSlider: document.getElementById('playback-rate-slider'),
        playbackRateValueSpan: document.getElementById('playback-rate-value'),
        zoomSlider: document.getElementById('zoom-slider'),
        zoomValueSpan: document.getElementById('zoom-value'),
        zoomInBtn: document.getElementById('zoom-in'),
        zoomOutBtn: document.getElementById('zoom-out'),
        centerTimelineBtn: document.getElementById('center-timeline'),
        autoScrollBtn: document.getElementById('auto-scroll-btn'),
        errorMessage: document.getElementById('error-message'),
        languageSwitcher: document.getElementById('language-switcher'),
        undoBtn: document.getElementById('undo-btn'),
        redoBtn: document.getElementById('redo-btn'),
        offsetInput: document.getElementById('offset-input'),
        applyOffsetBtn: document.getElementById('apply-offset-btn'),
        findInput: document.getElementById('find-input'),
        findBtn: document.getElementById('find-btn'),
        findNextBtn: document.getElementById('find-next-btn'),
        waveformCanvas: document.getElementById('waveform-canvas'),
        waveformCtx: document.getElementById('waveform-canvas').getContext('2d'),
        tooltip: document.getElementById('tooltip'),
        addSubBtnTimeline: document.getElementById('add-sub-btn-timeline'),
        editSubBtnTimeline: document.getElementById('edit-sub-btn-timeline'),
        deleteSubBtnTimeline: document.getElementById('delete-sub-btn-timeline'),
        mergeSubBtnTimeline: document.getElementById('merge-sub-btn-timeline'),
        editPopup: document.getElementById('edit-popup'),
        editPopupTextarea: document.getElementById('edit-popup-text'),
        saveEditBtn: document.getElementById('save-edit-btn'),
        cancelEditBtn: document.getElementById('cancel-edit-btn'),
        translateBtn: document.getElementById('translate-btn'),
        translatePopup: document.getElementById('translate-popup'),
        sourceLangSelect: document.getElementById('source-lang'),
        targetLangSelect: document.getElementById('target-lang'),
        startTranslationBtn: document.getElementById('start-translation-btn'),
        cancelTranslationBtn: document.getElementById('cancel-translation-btn'),
        translationStatusDiv: document.getElementById('translation-status'),
        settingsBtn: document.getElementById('settings-btn'),
        settingsPopup: document.getElementById('settings-popup'),
        closeSettingsBtn: document.getElementById('close-settings-btn'),
        autosaveCheckbox: document.getElementById('autosave-checkbox'),
        themeSwitcher: document.getElementById('theme-switcher'),
        frameRateSelect: document.getElementById('frame-rate-select'),
    };

    // --- Utility Functions ---
    const Utils = {
        srtTimeToSeconds: (time) => {
            const [h, m, s, ms] = time.split(/[:,]/).map(Number);
            return h * 3600 + m * 60 + s + ms / 1000;
        },
        formatSRTTime: (seconds) => {
            const date = new Date(seconds * 1000);
            const h = date.getUTCHours().toString().padStart(2, '0');
            const m = date.getUTCMinutes().toString().padStart(2, '0');
            const s = date.getUTCSeconds().toString().padStart(2, '0');
            const ms = Math.floor(date.getUTCMilliseconds()).toString().padStart(3, '0');
            return `${h}:${m}:${s},${ms}`;
        },
        parseSRT: (data) => {
            const subs = [];
            const regex = /(\d+)\r?\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})\r?\n([\s\S]*?)(?=\r?\n\r?\n|\r?$)/g;
            let match;
            while ((match = regex.exec(data)) !== null) {
                const [_, index, startStr, endStr, text] = match;
                const startTime = Utils.srtTimeToSeconds(startStr);
                const endTime = Utils.srtTimeToSeconds(endStr);
                if (!isNaN(startTime) && !isNaN(endTime) && text.trim()) {
                    subs.push({ index: parseInt(index), start: startTime, end: endTime, text: text.trim(), track: 0 });
                }
            }
            return subs;
        },
        vttTimeToSeconds: (time) => {
            const parts = time.split(/[:.]/);
            if (parts.length === 3) {
                const [minutes, seconds, ms] = parts.map(Number);
                return minutes * 60 + seconds + ms / 1000;
            } else if (parts.length === 4) {
                const [hours, minutes, seconds, ms] = parts.map(Number);
                return hours * 3600 + minutes * 60 + seconds + ms / 1000;
            }
            return NaN;
        },
        formatVTTTime: (seconds) => {
            const date = new Date(seconds * 1000);
            const h = date.getUTCHours().toString().padStart(2, '0');
            const m = date.getUTCMinutes().toString().padStart(2, '0');
            const s = date.getUTCSeconds().toString().padStart(2, '0');
            const ms = Math.floor(date.getUTCMilliseconds()).toString().padStart(3, '0');
            return `${h}:${m}:${s}.${ms}`;
        },
        parseVTT: (data) => {
            const subs = [];
            const lines = data.split(/\r?\n/);
            if (!lines[0] || !lines[0].includes('WEBVTT')) {
                throw new Error(State.translations[State.currentLanguage].errorParsingFile + 'Not a valid VTT file. Missing WEBVTT header.');
            }
            let i = 1;
            while (i < lines.length) {
                if (lines[i].trim() === '' || lines[i].startsWith('NOTE')) {
                    i++;
                    continue;
                }
                if (!lines[i].includes('-->')) {
                    i++;
                    continue;
                }
                const [start, end] = lines[i].split('-->').map(t => t.trim());
                const startTime = Utils.vttTimeToSeconds(start);
                const endTime = Utils.vttTimeToSeconds(end);
                if (isNaN(startTime) || isNaN(endTime) || startTime >= endTime) {
                    i++;
                    continue;
                }
                i++;
                let text = '';
                while (i < lines.length && lines[i].trim() !== '') {
                    text += (text ? '\n' : '') + lines[i];
                    i++;
                }
                if (text.trim()) {
                    subs.push({ index: subs.length + 1, start: startTime, end: endTime, text: text.trim(), track: 0 });
                }
                i++;
            }
            return subs;
        },
        snapTime: (time) => Math.round(time / (1 / State.frameRate)) * (1 / State.frameRate),
        showMessage: (msgKey, isError = false, ...args) => {
            let msg = State.translations[State.currentLanguage][msgKey] || msgKey;
            for (let i = 0; i < args.length; i++) {
                msg = msg.replace(`{${i}}`, args[i]);
            }
            DOM.errorMessage.textContent = msg;
            DOM.errorMessage.style.color = isError ? 'var(--error-color)' : 'var(--text-color)';
            DOM.errorMessage.style.display = 'block';
            if (!isError) {
                setTimeout(() => {
                    DOM.errorMessage.style.display = 'none';
                }, 3000);
            }
        },
        clearMessage: () => {
            DOM.errorMessage.textContent = '';
            DOM.errorMessage.style.display = 'none';
        }
    };

    // --- History Management ---
    const History = {
        save: () => {
            if (State.historyIndex < State.history.length - 1) {
                State.history = State.history.slice(0, State.historyIndex + 1);
            }
            const stateToSave = {
                subtitles: JSON.parse(JSON.stringify(State.subtitles)),
                activeSubtitleIndex: State.activeSubtitleIndex
            };
            State.history.push(stateToSave);
            if (State.history.length > 50) {
                State.history.shift();
            }
            State.historyIndex = State.history.length - 1;
            History.updateButtons();
            LocalStorage.saveState();
        },
        undo: () => {
            if (State.historyIndex > 0) {
                State.historyIndex--;
                const prevState = State.history[State.historyIndex];
                State.subtitles = JSON.parse(JSON.stringify(prevState.subtitles));
                State.activeSubtitleIndex = prevState.activeSubtitleIndex;
                Timeline.render();
                History.updateButtons();
                LocalStorage.saveState();
            }
        },
        redo: () => {
            if (State.historyIndex < State.history.length - 1) {
                State.historyIndex++;
                const nextState = State.history[State.historyIndex];
                State.subtitles = JSON.parse(JSON.stringify(nextState.subtitles));
                State.activeSubtitleIndex = nextState.activeSubtitleIndex;
                Timeline.render();
                History.updateButtons();
                LocalStorage.saveState();
            }
        },
        updateButtons: () => {
            DOM.undoBtn.disabled = State.history.length <= 1 || State.historyIndex <= 0;
            DOM.redoBtn.disabled = State.historyIndex >= State.history.length - 1;
        }
    };

    // --- Local Storage Management ---
    const LocalStorage = {
        saveState: () => {
            if (!State.autosaveActive) return;

            const state = {
                subtitles: State.subtitles,
                videoSrc: DOM.video.src,
                currentTime: DOM.video.currentTime,
                zoom: State.pixelsPerSecond,
                volume: DOM.video.volume,
                playbackRate: DOM.video.playbackRate,
                // Settings
                autosaveActive: State.autosaveActive,
                theme: State.theme,
                frameRate: State.frameRate,
                language: State.currentLanguage
            };
            try {
                localStorage.setItem(State.localStorageKey, JSON.stringify(state));
                console.log("Autosave complete at " + new Date().toLocaleTimeString());
            } catch (e) {
                console.error("Error saving state to local storage", e);
            }
        },
        loadState: () => {
            try {
                const state = JSON.parse(localStorage.getItem(State.localStorageKey));
                if (state) {
                    // Load settings first
                    State.autosaveActive = state.autosaveActive !== undefined ? state.autosaveActive : true;
                    State.theme = state.theme || 'dark';
                    State.frameRate = state.frameRate || 30;
                    State.currentLanguage = state.language || 'es';
                    
                    updateSettingsUI();

                    if (state.videoSrc) {
                        Utils.showMessage('loadSavedState');
                        DOM.video.src = state.videoSrc;
                        DOM.video.addEventListener('loadedmetadata', () => {
                            DOM.video.currentTime = state.currentTime;
                            DOM.video.volume = state.volume;
                            DOM.video.playbackRate = state.playbackRate;
                            State.pixelsPerSecond = state.zoom;
                            DOM.zoomSlider.value = state.zoom;
                            DOM.zoomValueSpan.textContent = state.zoom;
                            State.subtitles = state.subtitles;
                            State.videoDuration = DOM.video.duration;
                            State.history = [];
                            State.historyIndex = -1;
                            History.save();
                            Timeline.render();
                            Audio.loadWaveform();
                            Utils.showMessage('loadSavedStateComplete');
                        }, { once: true });
                    }
                }
            } catch (e) {
                console.error("Error loading state from local storage", e);
            }
        },
        startAutosave: () => {
            LocalStorage.stopAutosave();
            if (State.autosaveActive) {
                State.autosaveInterval = setInterval(() => {
                    if (State.videoDuration > 0) {
                        LocalStorage.saveState();
                    }
                }, 60000);
            }
        },
        stopAutosave: () => {
            if (State.autosaveInterval) {
                clearInterval(State.autosaveInterval);
                State.autosaveInterval = null;
            }
        }
    };

    // --- Timeline and UI Rendering ---
    const Timeline = {
        render: () => {
            DOM.timeline.innerHTML = '';
            DOM.timeline.appendChild(DOM.waveformCanvas);
            DOM.timeRuler.innerHTML = '';

            if (!State.videoDuration) {
                DOM.editSubBtnTimeline.disabled = true;
                DOM.deleteSubBtnTimeline.disabled = true;
                DOM.mergeSubBtnTimeline.disabled = true;
                return;
            }

            const timelineWidth = State.videoDuration * State.pixelsPerSecond;
            DOM.timeline.style.width = `${timelineWidth}px`;
            DOM.timeRuler.style.width = `${timelineWidth}px`;
            DOM.waveformCanvas.width = timelineWidth;
            DOM.waveformCanvas.height = DOM.timeline.offsetHeight;
            Audio.drawWaveform();

            const niceIntervals = [1, 2, 5, 10, 30, 60, 120, 300, 600];
            let interval = 1;
            for (const nice of niceIntervals) {
                if (nice * State.pixelsPerSecond > 50) {
                    interval = nice;
                    break;
                }
            }

            for (let t = 0; t <= State.videoDuration; t += interval) {
                const left = t * State.pixelsPerSecond;
                const marker = document.createElement('div');
                marker.className = 'time-marker';
                marker.style.left = `${left}px`;
                const label = document.createElement('div');
                label.className = 'time-marker-label';
                label.style.left = `${left}px`;
                label.textContent = Utils.formatSRTTime(t).substring(0, 8);
                DOM.timeRuler.appendChild(marker);
                DOM.timeRuler.appendChild(label);
            }

            const sortedSubs = [...State.subtitles].sort((a, b) => a.start - b.start);
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

            const trackDivs = [];
            for (let i = 0; i < tracks.length + 1; i++) {
                const trackDiv = document.createElement('div');
                trackDiv.className = 'subtitle-track';
                DOM.timeline.appendChild(trackDiv);
                trackDivs.push(trackDiv);
            }

            State.subtitles.forEach((sub, idx) => {
                const trackDiv = trackDivs[sub.track];
                if (!trackDiv) return;
                const block = document.createElement('div');
                block.className = 'subtitle-block';
                block.classList.toggle('active', idx === State.activeSubtitleIndex);
                const leftPos = sub.start * State.pixelsPerSecond;
                const width = (sub.end - sub.start) * State.pixelsPerSecond;
                block.style.left = `${leftPos}px`;
                block.style.width = `${Math.max(width, 20)}px`;
                block.dataset.index = idx;
                block.innerHTML = `<div class="handle left"></div><span class="sub-text">${sub.text}</span><div class="handle right"></div>`;
                block.title = `${Utils.formatSRTTime(sub.start)} --> ${Utils.formatSRTTime(sub.end)}\n${sub.text}`;
                trackDiv.appendChild(block);
            });

            DOM.deleteSubBtnTimeline.disabled = State.activeSubtitleIndex === null;
            DOM.editSubBtnTimeline.disabled = State.activeSubtitleIndex === null;
            DOM.mergeSubBtnTimeline.disabled = State.activeSubtitleIndex === null || State.activeSubtitleIndex >= State.subtitles.length - 1;
            Timeline.updateUIBasedOnTime();
        },
        updateUIBasedOnTime: () => {
            if (!State.videoDuration) return;
            const currentTime = DOM.video.currentTime;
            const newLeft = currentTime * State.pixelsPerSecond;
            DOM.currentTimeIndicator.style.left = `${newLeft}px`;

            const blocks = DOM.timeline.querySelectorAll('.subtitle-block');
            blocks.forEach(block => {
                const index = parseInt(block.dataset.index);
                const sub = State.subtitles[index];
                if (sub && currentTime >= sub.start && currentTime <= sub.end) {
                    block.classList.add('in-range');
                    if (State.activeSubtitleIndex !== index) {
                        selectSubtitle(index);
                    }
                } else {
                    block.classList.remove('in-range');
                }
            });
            updateSubtitleOverlay(currentTime);
            Timeline.autoScroll();
        },
        autoScroll: () => {
            if (State.autoScrollEnabled && State.videoDuration) {
                const currentTimePosition = DOM.video.currentTime * State.pixelsPerSecond;
                DOM.timelineContainer.scrollLeft = currentTimePosition - DOM.timelineContainer.clientWidth / 2;
            }
        },
        centerTimeline: () => {
            if (State.videoDuration) {
                const currentTime = DOM.video.currentTime;
                const currentTimePosition = currentTime * State.pixelsPerSecond;
                DOM.timelineContainer.scrollLeft = currentTimePosition - DOM.timelineContainer.clientWidth / 2;
            }
        },
        zoomIn: () => {
            let newZoom = Math.min(State.pixelsPerSecond + 20, 500);
            DOM.zoomSlider.value = newZoom;
            Timeline.updateZoom();
        },
        zoomOut: () => {
            let newZoom = Math.max(State.pixelsPerSecond - 20, 20);
            DOM.zoomSlider.value = newZoom;
            Timeline.updateZoom();
        },
        updateZoom: () => {
            State.pixelsPerSecond = parseInt(DOM.zoomSlider.value);
            DOM.zoomValueSpan.textContent = State.pixelsPerSecond;
            Timeline.render();
            Timeline.centerTimeline();
        },
        resetTimelineState: () => {
            State.subtitles = [];
            State.videoDuration = 0;
            State.activeSubtitleIndex = null;
            State.history = [];
            State.historyIndex = -1;
            DOM.videoFile.value = '';
            DOM.subtitleFile.value = '';
            DOM.timeline.innerHTML = '';
            DOM.timeRuler.innerHTML = '';
            DOM.subtitleOverlay.textContent = '';
            DOM.editSubBtnTimeline.disabled = true;
            DOM.deleteSubBtnTimeline.disabled = true;
            DOM.mergeSubBtnTimeline.disabled = true;
        }
    };

    // --- Video and Audio Management ---
    const Video = {
        init: () => {
            DOM.video.addEventListener('loadedmetadata', () => {
                State.videoDuration = DOM.video.duration;
                Timeline.render();
                Audio.loadWaveform();
                History.save();
            });
            DOM.video.addEventListener('play', () => { 
                DOM.playPauseBtn.textContent = '⏸'; 
                animateTimeline();
            });
            DOM.video.addEventListener('pause', () => { 
                DOM.playPauseBtn.textContent = '▶'; 
                cancelAnimationFrame(State.animationFrameId);
            });
            DOM.video.addEventListener('timeupdate', () => {
                Timeline.updateUIBasedOnTime();
            });
            DOM.video.addEventListener('volumechange', () => {
                DOM.volumeValueSpan.textContent = `${Math.round(DOM.video.volume * 100)}%`;
                DOM.muteUnmuteBtn.textContent = DOM.video.muted || DOM.video.volume === 0 ? '🔇' : '🔊';
            });
            DOM.video.addEventListener('ratechange', () => {
                DOM.playbackRateValueSpan.textContent = `${DOM.video.playbackRate.toFixed(2)}x`;
            });
        },
        playPause: () => {
            if (DOM.video.paused) {
                DOM.video.play();
            } else {
                DOM.video.pause();
            }
        },
        stepFrame: (direction) => {
            if (State.videoDuration) {
                const newTime = DOM.video.currentTime + direction / State.frameRate;
                DOM.video.currentTime = Math.max(0, Math.min(newTime, State.videoDuration));
            }
        },
        goToNextSubtitle: (direction) => {
            if (!State.subtitles.length || !State.videoDuration) return;
            const currentTime = DOM.video.currentTime;
            let targetTime;

            if (direction > 0) {
                const nextSub = State.subtitles.find(sub => sub.start > currentTime + 0.1);
                targetTime = nextSub ? nextSub.start : State.videoDuration;
            } else {
                const prevSub = State.subtitles.slice().reverse().find(sub => sub.end < currentTime - 0.1);
                targetTime = prevSub ? prevSub.start : 0;
            }
            DOM.video.currentTime = targetTime;
        }
    };
    
    const Audio = {
        loadWaveform: async () => {
            if (!DOM.video.src) return;
            Utils.showMessage('loadWaveform');
            try {
                const response = await fetch(DOM.video.src);
                const audioBlob = await response.blob();
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const arrayBuffer = await audioBlob.arrayBuffer();
                const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
                
                State.waveformData = audioBuffer.getChannelData(0);
                Audio.drawWaveform();
                Utils.showMessage('waveformLoaded');
            } catch (e) {
                console.error("Error loading audio waveform:", e);
                Utils.showMessage('errorWaveform', true);
            }
        },
        drawWaveform: () => {
            if (!State.waveformData || !State.videoDuration) return;
            
            const { waveformCtx, waveformCanvas } = DOM;
            const data = State.waveformData;
            const width = waveformCanvas.width;
            const height = waveformCanvas.height;
            const step = Math.ceil(data.length / width);
            const amp = height / 2;

            waveformCtx.clearRect(0, 0, width, height);
            waveformCtx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            waveformCtx.beginPath();
            waveformCtx.moveTo(0, amp);

            for (let i = 0; i < width; i++) {
                let min = 1.0;
                let max = -1.0;
                for (let j = 0; j < step; j++) {
                    const datum = data[(i * step) + j];
                    if (datum < min) min = datum;
                    if (datum > max) max = datum;
                }
                waveformCtx.lineTo(i, (1 + min) * amp);
                waveformCtx.lineTo(i, (1 + max) * amp);
            }
            waveformCtx.lineTo(width, amp);
            waveformCtx.stroke();
        }
    };

    // --- Subtitle Management ---
    const Subtitles = {
        load: (file) => {
            if (!DOM.video.src) {
                Utils.showMessage('errorNoVideo', true);
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                const extension = file.name.split('.').pop().toLowerCase();
                try {
                    State.subtitles = extension === 'srt' ? Utils.parseSRT(text) : Utils.parseVTT(text);
                    if (State.subtitles.length > 0) {
                        State.subtitles.sort((a, b) => a.start - b.start);
                        History.save();
                        Timeline.render();
                        Utils.showMessage('successSubsLoaded');
                    } else {
                        Utils.showMessage('errorInvalidSubtitles', true);
                    }
                } catch (error) {
                    Utils.showMessage(error.message, true);
                }
            };
            reader.readAsText(file);
        },
        export: () => {
            if (!State.subtitles.length) {
                Utils.showMessage('errorNoSubsToExport', true);
                return;
            }
            const format = DOM.exportFormatSelect.value;
            let content = '';
            if (format === 'srt') {
                content = State.subtitles.map((sub, i) => `${i + 1}\n${Utils.formatSRTTime(sub.start)} --> ${Utils.formatSRTTime(sub.end)}\n${sub.text}`).join('\n\n');
            } else {
                content = 'WEBVTT\n\n' + State.subtitles.map((sub, i) => `${Utils.formatVTTTime(sub.start)} --> ${Utils.formatVTTTime(sub.end)}\n${sub.text}`).join('\n\n');
            }
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `subtitles.${format}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            Utils.showMessage('successSubExported');
        },
        add: async () => {
            if (!DOM.video.src) {
                Utils.showMessage('errorNoVideo', true);
                return;
            }

            const newText = await showPopup(State.translations[State.currentLanguage].promptAddSub, '');
            if (newText) {
                const currentTime = DOM.video.currentTime;
                const newSub = {
                    index: State.subtitles.length + 1,
                    start: Utils.snapTime(currentTime),
                    end: Utils.snapTime(currentTime + 2),
                    text: newText,
                    track: 0
                };
                State.subtitles.push(newSub);
                State.subtitles.sort((a, b) => a.start - b.start);
                State.activeSubtitleIndex = State.subtitles.indexOf(newSub);
                History.save();
                Timeline.render();
                Utils.showMessage('successSubAdded');
            }
        },
        edit: async () => {
            if (State.activeSubtitleIndex === null) {
                Utils.showMessage('errorNoSubSelected', true);
                return;
            }
            const currentSub = State.subtitles[State.activeSubtitleIndex];
            const newText = await showPopup(State.translations[State.currentLanguage].promptEditSub, currentSub.text);
            if (newText) {
                currentSub.text = newText;
                History.save();
                Timeline.render();
                Utils.showMessage('successSubEdited');
            }
        },
        delete: () => {
            if (State.activeSubtitleIndex === null) {
                Utils.showMessage('errorNoSubSelected', true);
                return;
            }
            State.subtitles.splice(State.activeSubtitleIndex, 1);
            State.activeSubtitleIndex = null;
            History.save();
            Timeline.render();
            Utils.showMessage('successSubDeleted');
        },
        merge: () => {
            if (State.activeSubtitleIndex === null) {
                Utils.showMessage('errorNoSubSelected', true);
                return;
            }
            if (State.activeSubtitleIndex >= State.subtitles.length - 1) {
                Utils.showMessage('errorNoNextSub', true);
                return;
            }
            const currentSub = State.subtitles[State.activeSubtitleIndex];
            const nextSub = State.subtitles[State.activeSubtitleIndex + 1];
            currentSub.text = `${currentSub.text}\n${nextSub.text}`;
            currentSub.end = nextSub.end;
            State.subtitles.splice(State.activeSubtitleIndex + 1, 1);
            History.save();
            Timeline.render();
            Utils.showMessage('successSubMerged');
        },
        applyOffset: () => {
            const offset = parseFloat(DOM.offsetInput.value);
            if (isNaN(offset)) return;
            State.subtitles.forEach(sub => {
                sub.start += offset / 1000;
                sub.end += offset / 1000;
            });
            History.save();
            Timeline.render();
            Utils.showMessage('successOffsetApplied');
        },
        split: () => {
            if (State.activeSubtitleIndex === null) {
                Utils.showMessage('errorNoSubSelected', true);
                return;
            }
            const currentTime = DOM.video.currentTime;
            const sub = State.subtitles[State.activeSubtitleIndex];
            if (currentTime > sub.start + 0.1 && currentTime < sub.end - 0.1) {
                const newSub = {
                    index: State.subtitles.length + 1,
                    start: Utils.snapTime(currentTime),
                    end: sub.end,
                    text: sub.text,
                    track: 0
                };
                sub.end = Utils.snapTime(currentTime);
                State.subtitles.push(newSub);
                State.subtitles.sort((a, b) => a.start - b.start);
                History.save();
                Timeline.render();
                Utils.showMessage('successSubSplitted');
            } else {
                Utils.showMessage('errorCannotSplit', true);
            }
        }
    };
    
    // --- Translation Management ---
    const Translation = {
        init: () => {
            populateLanguageSelects();
        },
        showPopup: () => {
            DOM.translatePopup.style.display = 'block';
        },
        hidePopup: () => {
            DOM.translatePopup.style.display = 'none';
        },
        start: async () => {
            if (!State.subtitles.length) {
                Utils.showMessage('errorNoSubsToTranslate', true);
                return;
            }
            const sourceLang = DOM.sourceLangSelect.value;
            const targetLang = DOM.targetLangSelect.value;
            const subtitlesToTranslate = JSON.parse(JSON.stringify(State.subtitles));
            
            Utils.showMessage('successTranslationStarted', false);
            DOM.translationStatusDiv.textContent = '0%';
            
            try {
                let translatedCount = 0;
                for (const sub of subtitlesToTranslate) {
                    const translatedText = await Translation.fetchTranslation(sub.text, sourceLang, targetLang);
                    sub.text = translatedText;
                    translatedCount++;
                    const progress = Math.floor((translatedCount / subtitlesToTranslate.length) * 100);
                    DOM.translationStatusDiv.textContent = `${progress}%`;
                }
                
                State.subtitles = subtitlesToTranslate;
                History.save();
                Timeline.render();
                Utils.showMessage('successTranslationComplete');
            } catch (e) {
                console.error("Translation failed:", e);
                Utils.showMessage('errorTranslationFailed', true);
            } finally {
                Translation.hidePopup();
            }
        },
        fetchTranslation: async (text, sourceLang, targetLang) => {
            const url = `${State.myMemoryApiUrl}${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.responseStatus !== 200) {
                throw new Error(data.responseDetails || 'Translation API error');
            }
            return data.responseData.translatedText;
        }
    };

    // --- Search Functionality ---
    const Search = {
        find: () => {
            const searchText = DOM.findInput.value.toLowerCase().trim();
            if (!searchText) return;
            
            State.lastFoundIndex = -1;
            Search.findNext(searchText);
        },
        findNext: (searchText = DOM.findInput.value.toLowerCase().trim()) => {
            if (!searchText) return;
            
            const startIndex = State.lastFoundIndex + 1;
            const foundIndex = State.subtitles.findIndex((sub, index) =>
                index >= startIndex && sub.text.toLowerCase().includes(searchText)
            );
            
            if (foundIndex !== -1) {
                State.lastFoundIndex = foundIndex;
                const foundSub = State.subtitles[foundIndex];
                DOM.video.currentTime = foundSub.start;
                selectSubtitle(foundIndex);
                Utils.showMessage('successFind', false, Utils.formatSRTTime(foundSub.start));
            } else {
                State.lastFoundIndex = -1;
                Utils.showMessage('successNoMoreFinds', false);
            }
        }
    };

    // --- Event Handlers and Initializers ---
    const Handlers = {
        drag: {
            isDragging: false,
            isResizing: false,
            dragTarget: null,
            startX: 0,
            originalTime: 0,
            originalWidth: 0,
            originalSub: null,
            handleType: null,
        },
        init: () => {
            DOM.videoFile.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    Timeline.resetTimelineState();
                    DOM.video.src = URL.createObjectURL(file);
                }
            });
            DOM.subtitleFile.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    Subtitles.load(file);
                }
            });
            DOM.exportBtn.addEventListener('click', Subtitles.export);
            DOM.playPauseBtn.addEventListener('click', Video.playPause);
            DOM.prevSubBtn.addEventListener('click', () => Video.goToNextSubtitle(-1));
            DOM.nextSubBtn.addEventListener('click', () => Video.goToNextSubtitle(1));
            DOM.stepBackwardBtn.addEventListener('click', () => Video.stepFrame(-1));
            DOM.stepForwardBtn.addEventListener('click', () => Video.stepFrame(1));
            DOM.muteUnmuteBtn.addEventListener('click', () => DOM.video.muted = !DOM.video.muted);
            DOM.volumeSlider.addEventListener('input', (e) => DOM.video.volume = e.target.value);
            DOM.playbackRateSlider.addEventListener('input', (e) => DOM.video.playbackRate = e.target.value);
            DOM.zoomInBtn.addEventListener('click', Timeline.zoomIn);
            DOM.zoomOutBtn.addEventListener('click', Timeline.zoomOut);
            DOM.zoomSlider.addEventListener('input', Timeline.updateZoom);
            DOM.centerTimelineBtn.addEventListener('click', Timeline.centerTimeline);
            DOM.autoScrollBtn.addEventListener('click', () => {
                State.autoScrollEnabled = !State.autoScrollEnabled;
                DOM.autoScrollBtn.classList.toggle('active', State.autoScrollEnabled);
                Timeline.updateUIBasedOnTime();
            });
            DOM.undoBtn.addEventListener('click', History.undo);
            DOM.redoBtn.addEventListener('click', History.redo);
            DOM.applyOffsetBtn.addEventListener('click', Subtitles.applyOffset);
            DOM.findBtn.addEventListener('click', Search.find);
            DOM.findInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') Search.findNext();
            });
            DOM.findNextBtn.addEventListener('click', Search.findNext);
            DOM.addSubBtnTimeline.addEventListener('click', Subtitles.add);
            DOM.editSubBtnTimeline.addEventListener('click', Subtitles.edit);
            DOM.deleteSubBtnTimeline.addEventListener('click', Subtitles.delete);
            DOM.mergeSubBtnTimeline.addEventListener('click', Subtitles.merge);
            
            DOM.timelineContainer.addEventListener('scroll', () => {
                DOM.timeRuler.scrollLeft = DOM.timelineContainer.scrollLeft;
            });
            
            DOM.timeline.addEventListener('mousedown', Handlers.handleTimelineMousedown);
            DOM.timeline.addEventListener('mousemove', Handlers.handleTimelineMousemove);
            DOM.timeline.addEventListener('mouseup', Handlers.handleTimelineMouseup);
            DOM.timeline.addEventListener('mouseleave', Handlers.handleTimelineMouseup);
            
            DOM.timelineWrapper.addEventListener('click', Handlers.handleTimelineClick);
            
            DOM.currentTimeIndicator.addEventListener('mousedown', Handlers.handleCurrentTimeMousedown);
            
            DOM.video.addEventListener('mousemove', Handlers.handleVideoMousemove);
            
            DOM.saveEditBtn.addEventListener('click', Handlers.saveEdit);
            DOM.cancelEditBtn.addEventListener('click', Handlers.cancelEdit);

            DOM.translateBtn.addEventListener('click', Translation.showPopup);
            DOM.cancelTranslationBtn.addEventListener('click', Translation.hidePopup);
            DOM.startTranslationBtn.addEventListener('click', Translation.start);

            // Settings Listeners
            DOM.settingsBtn.addEventListener('click', Handlers.showSettings);
            DOM.closeSettingsBtn.addEventListener('click', Handlers.hideSettings);
            DOM.autosaveCheckbox.addEventListener('change', Handlers.handleAutosaveToggle);
            DOM.languageSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
            DOM.themeSwitcher.addEventListener('change', (e) => setTheme(e.target.value));
            DOM.frameRateSelect.addEventListener('change', (e) => {
                State.frameRate = parseFloat(e.target.value);
            });


            window.addEventListener('keydown', Handlers.handleKeydown);
            window.addEventListener('resize', Timeline.render);
        },
        showSettings: () => {
            DOM.settingsPopup.style.display = 'block';
        },
        hideSettings: () => {
            DOM.settingsPopup.style.display = 'none';
        },
        handleAutosaveToggle: (e) => {
            State.autosaveActive = e.target.checked;
            LocalStorage.startAutosave();
        },
        handleTimelineClick: (e) => {
            if (e.target.classList.contains('subtitle-block') || e.target.closest('.subtitle-block')) {
                const subBlock = e.target.closest('.subtitle-block');
                const index = parseInt(subBlock.dataset.index);
                selectSubtitle(index);
                DOM.video.currentTime = State.subtitles[index].start;
            } else {
                const clickX = e.clientX + DOM.timelineContainer.scrollLeft - DOM.timelineContainer.getBoundingClientRect().left;
                const newTime = clickX / State.pixelsPerSecond;
                DOM.video.currentTime = newTime;
                selectSubtitle(null);
            }
            Timeline.updateUIBasedOnTime();
        },
        handleCurrentTimeMousedown: (e) => {
            e.preventDefault();
            DOM.video.pause();
            const startX = e.clientX;
            const startVideoTime = DOM.video.currentTime;

            const onMouseMove = (moveEvent) => {
                const deltaX = moveEvent.clientX - startX;
                const newTime = startVideoTime + deltaX / State.pixelsPerSecond;
                DOM.video.currentTime = Math.max(0, Math.min(newTime, State.videoDuration));
            };

            const onMouseUp = () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        },
        handleTimelineMousedown: (e) => {
            if (e.target.classList.contains('subtitle-block')) {
                e.preventDefault();
                Handlers.drag.isDragging = true;
                Handlers.drag.dragTarget = e.target;
                Handlers.drag.startX = e.clientX;
                Handlers.drag.originalSub = JSON.parse(JSON.stringify(State.subtitles[parseInt(e.target.dataset.index)]));
                Handlers.drag.dragTarget.classList.add('dragging');
                selectSubtitle(parseInt(e.target.dataset.index));
            } else if (e.target.classList.contains('handle')) {
                e.preventDefault();
                Handlers.drag.isResizing = true;
                Handlers.drag.dragTarget = e.target.parentElement;
                Handlers.drag.handleType = e.target.classList.contains('left') ? 'left' : 'right';
                Handlers.drag.startX = e.clientX;
                Handlers.drag.originalSub = JSON.parse(JSON.stringify(State.subtitles[parseInt(Handlers.drag.dragTarget.dataset.index)]));
                selectSubtitle(parseInt(Handlers.drag.dragTarget.dataset.index));
            }
            DOM.timeline.classList.add('dragging');
        },
        handleTimelineMousemove: (e) => {
            if (Handlers.drag.isDragging) {
                const deltaX = e.clientX - Handlers.drag.startX;
                const deltaTime = deltaX / State.pixelsPerSecond;
                const newStart = Utils.snapTime(Handlers.drag.originalSub.start + deltaTime);
                const newEnd = Utils.snapTime(Handlers.drag.originalSub.end + deltaTime);

                const index = parseInt(Handlers.drag.dragTarget.dataset.index);
                State.subtitles[index].start = newStart;
                State.subtitles[index].end = newEnd;
                Timeline.render();
                DOM.video.currentTime = newStart;
                
            } else if (Handlers.drag.isResizing) {
                const deltaX = e.clientX - Handlers.drag.startX;
                const deltaTime = deltaX / State.pixelsPerSecond;
                const index = parseInt(Handlers.drag.dragTarget.dataset.index);
                const sub = State.subtitles[index];

                if (Handlers.drag.handleType === 'left') {
                    const newStart = Utils.snapTime(Handlers.drag.originalSub.start + deltaTime);
                    if (newStart < sub.end) {
                        sub.start = newStart;
                        Timeline.render();
                        DOM.video.currentTime = newStart;
                    }
                } else if (Handlers.drag.handleType === 'right') {
                    const newEnd = Utils.snapTime(Handlers.drag.originalSub.end + deltaTime);
                    if (newEnd > sub.start) {
                        sub.end = newEnd;
                        Timeline.render();
                    }
                }
            }
        },
        handleTimelineMouseup: (e) => {
            if (Handlers.drag.isDragging || Handlers.drag.isResizing) {
                History.save();
                Handlers.drag.isDragging = false;
                Handlers.drag.isResizing = false;
                if (Handlers.drag.dragTarget) {
                    Handlers.drag.dragTarget.classList.remove('dragging');
                }
                DOM.timeline.classList.remove('dragging');
            }
        },
        handleKeydown: (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'y' || (e.shiftKey && (e.key === 'S' || e.key === 'M')))) {
                e.preventDefault();
            }
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'z') { History.undo(); }
                if (e.key === 'y') { History.redo(); }
            }
            if (e.ctrlKey || e.metaKey) {
                if (e.shiftKey) {
                    if (e.key.toLowerCase() === 's') { Subtitles.split(); }
                    if (e.key.toLowerCase() === 'm') { Subtitles.merge(); }
                }
            }
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    Video.stepFrame(-1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    Video.stepFrame(1);
                    break;
                case ' ':
                    if (e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
                        e.preventDefault();
                        Video.playPause();
                    }
                    break;
            }
        },
        handleVideoMousemove: (e) => {
            const rect = DOM.video.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const videoX = x / rect.width;
            const videoY = y / rect.height;
            const currentTime = DOM.video.currentTime;
            const sub = State.subtitles.find(s => currentTime >= s.start && currentTime <= s.end);
            if (sub && videoY > 0.7) {
                DOM.tooltip.style.display = 'block';
                DOM.tooltip.style.left = `${e.clientX}px`;
                DOM.tooltip.style.top = `${e.clientY}px`;
                DOM.tooltip.textContent = sub.text;
            } else {
                DOM.tooltip.style.display = 'none';
            }
        },
        saveEdit: () => {
            const newText = DOM.editPopupTextarea.value.trim();
            if (newText && State.activeSubtitleIndex !== null) {
                State.subtitles[State.activeSubtitleIndex].text = newText;
                History.save();
                Timeline.render();
                DOM.editPopup.style.display = 'none';
                Utils.showMessage('successSubEdited');
            } else {
                DOM.editPopup.style.display = 'none';
            }
        },
        cancelEdit: () => {
            DOM.editPopup.style.display = 'none';
        },
    };

    const showPopup = (title, initialText) => {
        return new Promise((resolve) => {
            DOM.editPopup.querySelector('h3').textContent = title;
            DOM.editPopupTextarea.value = initialText;
            DOM.editPopup.style.display = 'block';
            const saveHandler = () => {
                DOM.saveEditBtn.removeEventListener('click', saveHandler);
                DOM.cancelEditBtn.removeEventListener('click', cancelHandler);
                resolve(DOM.editPopupTextarea.value);
            };
            const cancelHandler = () => {
                DOM.saveEditBtn.removeEventListener('click', saveHandler);
                DOM.cancelEditBtn.removeEventListener('click', cancelHandler);
                DOM.editPopup.style.display = 'none';
                resolve(null);
            };
            DOM.saveEditBtn.addEventListener('click', saveHandler);
            DOM.cancelEditBtn.addEventListener('click', cancelHandler);
        });
    };

    const selectSubtitle = (index) => {
        if (State.activeSubtitleIndex !== null) {
            const prevActive = document.querySelector(`.subtitle-block[data-index="${State.activeSubtitleIndex}"]`);
            if (prevActive) prevActive.classList.remove('active');
        }
        State.activeSubtitleIndex = index;
        if (index !== null) {
            const newActive = document.querySelector(`.subtitle-block[data-index="${index}"]`);
            if (newActive) newActive.classList.add('active');
        }
        DOM.editSubBtnTimeline.disabled = State.activeSubtitleIndex === null;
        DOM.deleteSubBtnTimeline.disabled = State.activeSubtitleIndex === null;
        DOM.mergeSubBtnTimeline.disabled = State.activeSubtitleIndex === null || State.activeSubtitleIndex >= State.subtitles.length - 1;
    };

    const updateSubtitleOverlay = (currentTime) => {
        const currentSub = State.subtitles.find(sub => currentTime >= sub.start && currentTime <= sub.end);
        if (currentSub) {
            DOM.subtitleOverlay.textContent = currentSub.text;
        } else {
            DOM.subtitleOverlay.textContent = '';
        }
    };
    
    const animateTimeline = () => {
        Timeline.updateUIBasedOnTime();
        State.animationFrameId = requestAnimationFrame(animateTimeline);
    };
    
    const setLanguage = (lang) => {
        State.currentLanguage = lang;
        Object.keys(State.translations.es).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n="${key}"], [data-i18n-title="${key}"], [data-i18n-placeholder="${key}"], [data-i18n-label="${key}"]`);
            elements.forEach(el => {
                const translation = State.translations[lang][key];
                if (translation) {
                    // Traduce el placeholder si existe
                    if (el.hasAttribute('data-i18n-placeholder')) {
                        el.placeholder = translation;
                    }
                    // Traduce el título si existe
                    if (el.hasAttribute('data-i18n-title')) {
                        el.title = translation;
                    }
                    // Traduce el texto principal si existe
                    if (el.hasAttribute('data-i18n')) {
                        el.textContent = translation;
                    }
                }
            });
        });
        document.title = State.translations[lang]['title'];
    };

    const setTheme = (theme) => {
        document.body.className = theme === 'light' ? 'light-theme' : '';
        State.theme = theme;
    }

    const updateSettingsUI = () => {
        setTheme(State.theme);
        setLanguage(State.currentLanguage);
        DOM.languageSwitcher.value = State.currentLanguage;
        DOM.themeSwitcher.value = State.theme;
        DOM.frameRateSelect.value = State.frameRate;
        DOM.autosaveCheckbox.checked = State.autosaveActive;
    }

    const populateLanguageSelects = () => {
        DOM.sourceLangSelect.innerHTML = '';
        DOM.targetLangSelect.innerHTML = ''; // Limpiar también el de destino
    
        for (const langCode in State.availableLanguages) {
            const langName = State.availableLanguages[langCode];
            
            const option = document.createElement('option');
            option.value = langCode;
            option.textContent = langName;
    
            // Añadir la opción a ambos desplegables
            DOM.sourceLangSelect.appendChild(option);
            DOM.targetLangSelect.appendChild(option.cloneNode(true));
        }
        
        // Establecer valores por defecto
        DOM.sourceLangSelect.value = State.currentLanguage;
        DOM.targetLangSelect.value = State.currentLanguage === 'es' ? 'en' : 'es';
    };

    const initialize = () => {
        Video.init();
        Handlers.init();
        Translation.init();
        LocalStorage.loadState();
        LocalStorage.startAutosave();
        updateSettingsUI();
    };
    
    initialize();
});