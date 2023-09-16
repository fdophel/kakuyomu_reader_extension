// ==UserScript==
// @name         Kakuyomu Reader Extension
// @namespace    https://github.com/fdophel/kakuyomu_reader_extension
// @version      0.1
// @description  Add several pager functions, ^v>.
// @author       fdophel
// @match        https://kakuyomu.jp/works/*/episodes/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function createTool(tooltip_label, text) {
        const p = document.createElement('p');
        p.setAttribute('class', 'ui-tooltip ui-tooltip-bottom');
        p.setAttribute('data-ui-tooltip-label', tooltip_label);

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'ui-button-silent-wrapper');

        const span = document.createElement('span');
        span.setAttribute('class', 'ui-button-silent');

        const textNode = document.createTextNode(text);

        span.appendChild(textNode)
        button.append(span);
        p.append(button);
        return p
    }

    const next_a = document.getElementById('contentMain-readNextEpisode');
    const tools = document.getElementById('worksEpisodesEpisodeHeader-tools');
    const first_tool = tools.firstElementChild;

    const up_tool = createTool('go top', '↑');
    up_tool.addEventListener("click", function(){ window.scrollTo(0, 0); });
    tools.insertBefore(up_tool, first_tool);

    const down_tool = createTool('go bottom', '↓');
    down_tool.addEventListener("click", function(){ window.scrollTo(0, document.body.scrollHeight); });
    tools.insertBefore(down_tool, first_tool);

    const next_tool = createTool('next page', '→');
    next_tool.addEventListener("click", function(){ next_a.click(); });
    tools.insertBefore(next_tool, first_tool);
})();
