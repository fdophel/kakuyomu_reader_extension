// ==UserScript==
// @name         Kakuyomu Reader Extension
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add several pager functions
// @author       You
// @match        https://kakuyomu.jp/works/*/episodes/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function createTool(tooltip_label, text) {
        const p = document.createElement('p');
        p.setAttribute('class', 'ui-tooltip ui-tooltip-bottom');
        p.setAttribute('data-ui-tooltip-label', tooltip_label);
        const button = document.createElement('button');
        const span = document.createElement('span');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'ui-button-silent-wrapper');
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
    const next_tool = createTool('next page', '→');
    next_tool.addEventListener("click", function(){ next_a.click(); });
    tools.insertBefore(next_tool, first_tool);
    console.log(next_a);
    console.log(first_tool);
})();
