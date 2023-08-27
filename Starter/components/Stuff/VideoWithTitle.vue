<template>
    <section class="block-container block-container--default fluent fluent--light"
        style="padding-top: 1.5em; padding-bottom: 2em; margin-bottom: 2em;">
        <!---->
        <!---->
        <div class="block-container__container">
            <!---->
            <div class="block-container__content">
                <div class="pillar__overview pillar__overview--layout-centered-bold">
                    <div class="pillar__heading">
                        <div class="common-heading common-heading--default common-heading--centered common-heading--gradients">
                            <div aria-level="1" role="heading"
                                class="px-balanced-text common-heading__title h1 pillar__title">
                                <span class="px-balanced-text__inner px-balanced-text__inner--html">
                                    <p>Welcome to <em>MOTI</em> !</p>
                                </span>
                            </div>
                            <div class="px-balanced-text common-heading__description sh1" style="">
                                <div class="px-balanced-text__inner px-balanced-text__inner--html"
                                    style="max-width: 912px;">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Vestibulum et felis ex.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pillar__media">
                        <div frame-fallback="shadow-lg" class="media-item-video media-item-video--default">
                            <div class="px-contain media-item-video__contain">
                                <div
                                    class="media-item-frame media-item-frame--rounded-block media-item-frame--shadow media-item-video__frame">
                                    <video controls
                                        poster="https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1823&q=80"
                                        preload="metadata" controlslist="nodownload" draggable="false"
                                        disablepictureinpicture="" class="media-item-video__video">
                                        <!-- <source src="videos\pexels-bruno-cervera-11649326_(720p).mp4" type="video/mp4"> -->
                                    </video>
                                    <!---->
                                    <button aria-label="Play" class="media-item-video__button"
                                        style="background-image:url(&quot;https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1823&q=80;);"
                                        data-bi-id="Button-Play-Video">
                                        <span class="media-item-video__play">
                                            <svg viewBox="0 0 70 70" height="100%" width="100%"
                                                xmlns="http://www.w3.org/2000/svg" class="px-svg">
                                                <path xmlns="http://www.w3.org/2000/svg"
                                                    d="M30.864 43.42c-.258 0-.5-.049-.725-.145a1.919 1.919 0 0 1-.593-.396A1.821 1.821 0 0 1 29 41.565V27.854a1.86 1.86 0 0 1 1.13-1.71 1.905 1.905 0 0 1 1.188-.087c.154.04.299.097.434.175l12.302 6.856c.296.167.528.395.695.685.167.29.251.602.251.937 0 .34-.082.655-.246.941a1.781 1.781 0 0 1-.7.68l-12.292 6.857c-.136.077-.28.135-.435.173a1.905 1.905 0 0 1-.463.058Z"
                                                    fill="currentColor" fill-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

.px-balanced-text {
    width: 100%;
}

.px-balanced-text__inner {
    display: inline-block;
}


.media-item-frame--rounded-sm {
    border-radius: 0.5em;
    overflow: hidden;
}

.media-item-frame--rounded {
    border-radius: 1em;
    overflow: hidden;
}

.media-item-frame--rounded-block {
    border-radius: 1.25em;
    overflow: hidden;
}

.media-item-frame--shadow-lg {
    filter: drop-shadow(-20px 30px 60px rgba(0, 0, 0, 0.25));
}

.media-item-frame--shadow {
    filter: drop-shadow(-20px 30px 30px rgba(0, 0, 0, 0.2));
}

.media-item-frame--shadow-subtle {
    filter: drop-shadow(-15px 30px 20px rgba(0, 0, 0, 0.1));
}

.media-item-frame--border {
    border: 12px solid #f7f7f7;
    border-radius: 18px;
}

.media-item-frame--border,
.media-item-frame--border-slim {
    background-color: #f0f0f0;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06),
        0 9.5px 12px -3px rgba(0, 0, 0, 0.084),
        0 19.5px 30.5px 0 rgba(0, 0, 0, 0.029), 0 7px 40px 0 rgba(0, 0, 0, 0.022);
    overflow: hidden;
}

.media-item-frame--border-slim {
    border: 8px solid #f7f7f7;
    border-radius: 12px;
}

.media-item-frame--border-dark {
    border: 12px solid #383838;
    border-radius: 18px;
}

.media-item-frame--border-dark,
.media-item-frame--border-dark-slim {
    background-color: #383838;
    box-shadow: 0 9.5px 12px -3px rgba(0, 0, 0, 0.158),
        0 19.5px 30.5px 0 rgba(0, 0, 0, 0.054), 0 7px 40px 0 rgba(0, 0, 0, 0.041);
    overflow: hidden;
}

.media-item-frame--border-dark-slim {
    border: 12px solid #383838;
    border-radius: 12px;
}

.media-item-frame--glass,
.media-item-frame--glass-blur {
    background-color: hsla(0, 0%, 100%, 0.05);
    border: 12px solid transparent;
    border-radius: 18px;
    box-shadow: -1px -1px 0 0 hsla(0, 0%, 100%, 0.4),
        1px 1px 0 0 rgba(0, 0, 0, 0.08), 0 9.5px 12px -3px rgba(0, 0, 0, 0.084),
        0 19.5px 30.5px 0 rgba(0, 0, 0, 0.029), 0 7px 40px 0 rgba(0, 0, 0, 0.022);
    overflow: hidden;
}

.media-item-frame--glass-blur {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
}

.px-contain {
    height: 100%;
    position: relative;
    width: 100%;
}

.media-item-video {
    align-self: center;
    height: 100%;
    width: 100%;
}

.media-item-video .media-item-video-fade-enter-active,
.media-item-video .media-item-video-fade-leave-active {
    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-delay: 0;
}

.media-item-video .media-item-video-fade-enter,
.media-item-video .media-item-video-fade-enter-from,
.media-item-video .media-item-video-fade-leave-to {
    opacity: 0;
}

.media-item-video__contain {
    box-sizing: border-box;
    height: 100%;
}

.media-item-video__contain,
.media-item-video__frame {
    margin: 0 auto;
    position: relative;
    width: 100%;
}

.media-item-video__video {
    height: 100%;
    width: 100%;
}

.media-item-video__button {
    background-size: cover;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}

.media-item-video__play {
    aspect-ratio: 1;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    box-shadow: 0 4.2799379518px 8px rgba(0, 0, 0, 0.15);
    color: #fff;
    height: auto;
    left: 50%;
    min-height: 0;
    min-width: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: background 0.15s cubic-bezier(0.165, 0.84, 0.44, 1) 0ms,
        transform 0.15s cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
    width: min(15%, 100px);
}

.media-item-video__play>svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.media-item-video__button:hover .media-item-video__play {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 5.6568542495px 10px rgba(0, 0, 0, 0.15);
    transform: translate(-50%, -50%) scale(1.14);
}

.media-item-video--hide-border-artifact .media-item-video__video {
    height: calc(100% + 2px) !important;
    margin: -1px -1px -1px -2px;
    width: calc(100% + 4px) !important;
}

.common-heading {
    max-width: 60em;
}

.common-heading--centered {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.common-heading__title {
    margin: auto auto 0.5em;
}

.common-heading__title:last-child {
    margin-bottom: auto;
}

.common-heading__description strong {
    font-weight: 600;
}

.common-heading__description li,
.common-heading__description ol,
.common-heading__description p,
.common-heading__description ul {
    line-height: 1.33;
}

.common-heading__description ol:not(:last-child),
.common-heading__description p:not(:last-child),
.common-heading__description ul:not(:last-child) {
    margin-bottom: 0.75em;
}

.common-heading__description li:not(:last-child) {
    margin-bottom: 0.375em;
}

.common-heading__description p {
    padding: 0;
}

.common-heading__description p:first-child {
    margin-top: 0 !important;
}

.common-heading__description p:last-child {
    margin-bottom: 0 !important;
}

.common-heading__description a {
    color: var(--theme-link);
}

.common-heading__description a:hover {
    color: var(--theme-link-hover);
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: var(--theme-link-hover);
}

.common-heading__description a:active {
    color: var(--theme-link-active);
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: var(--theme-link-active);
}

.common-heading__description ol,
.common-heading__description ul {
    list-style: disc none outside;
    padding: 0 0 0 1em;
}

.common-heading__description ol li,
.common-heading__description ul li {
    line-height: inherit;
    padding-left: 0.5em;
}

.common-heading__description ul {
    list-style: disc none outside;
}

.common-heading__description ol {
    list-style: decimal none outside;
}

.common-heading--gradients .common-heading__title em {
    -webkit-background-clip: text;
    background-clip: text;
    background-image: var(--theme-em-gradient);
    color: transparent;
    display: inline;
    font-style: normal !important;
    font-weight: inherit !important;
}

.common-heading__description {
    margin: 0 auto;
}

.common-heading__description a {
    -webkit-text-decoration: underline;
    text-decoration: underline;
}

.common-heading__description a:hover {
    color: var(--theme-link);
}

.common-heading--compact .common-heading__title {
    margin: auto auto 0.25em;
}

.common-heading--compact .common-heading__title:last-child {
    margin-bottom: auto;
}

.common-heading--slide .common-heading__title {
    font-size: max(32px, min(3.125vw, 60px));
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0.5em;
    margin-top: 0;
}

.common-heading--slide .common-heading__title em {
    -webkit-background-clip: text;
    background-clip: text;
    background-image: var(--theme-em-gradient);
    color: transparent;
    display: inline;
    font-style: normal !important;
    font-weight: inherit !important;
}

.common-heading--slide .common-heading__title p {
    line-height: inherit;
    margin: 0;
    padding: 0;
}

.common-heading--slide .common-heading__description {
    display: inline;
    font-size: inherit;
    position: relative;
    width: calc(100% + 2em);
    z-index: 1;
}

.common-heading--description-lg .common-heading__description>div {
    font-size: 1.5em;
}

.common-heading--bold .common-heading__description,
.common-heading--bold .common-heading__title,
.common-heading--description-bold .common-heading__description,
.common-heading--title-bold .common-heading__title {
    font-weight: 600;
}

.px-icon,
.px-svg {
    color: inherit;
    display: inline-block;
    line-height: 1;
}


.fluent,
.fluent--light,
body {
    --theme-page-bg: #fff;
    --theme-page-bg-rgb: 255, 255, 255;
    --theme-page-bg-lighter: #fff;
    --theme-page-bg-darker: #e6e6e6;
    --theme-page-fg: #1a1a1a;
    --theme-page-fg-rgb: 26, 26, 26;
    --theme-page-fg-lighter: #343434;
    --theme-page-fg-darker: #010101;
    --theme-link: #1a59c8;
    --theme-link-rgb: 26, 89, 200;
    --theme-link-lighter: #3172e4;
    --theme-link-darker: #14459b;
    --theme-link-hover: #6a0dd4;
    --theme-link-hover-rgb: 106, 13, 212;
    --theme-link-hover-lighter: #8323f1;
    --theme-link-hover-darker: #520aa4;
    --theme-link-active: #14459b;
    --theme-link-active-rgb: 20, 69, 155;
    --theme-link-active-lighter: #1a59c8;
    --theme-link-active-darker: #0e316e;
    --theme-button-bg: #1a1a1a;
    --theme-button-bg-rgb: 26, 26, 26;
    --theme-button-bg-lighter: #343434;
    --theme-button-bg-darker: #010101;
    --theme-button-bg-hover: #14459b;
    --theme-button-bg-hover-rgb: 20, 69, 155;
    --theme-button-bg-hover-lighter: #1a59c8;
    --theme-button-bg-hover-darker: #0e316e;
    --theme-button-bg-active: #000;
    --theme-button-bg-active-rgb: 0, 0, 0;
    --theme-button-bg-active-lighter: #1a1a1a;
    --theme-button-bg-active-darker: #000;
    --theme-button-fg: #fff;
    --theme-button-fg-rgb: 255, 255, 255;
    --theme-button-fg-lighter: #fff;
    --theme-button-fg-darker: #e6e6e6;
    --theme-blue: #1a59c8;
    --theme-blue-rgb: 26, 89, 200;
    --theme-blue-lighter: #3172e4;
    --theme-blue-darker: #14459b;
    --theme-medblue: #2970ea;
    --theme-medblue-rgb: 41, 112, 234;
    --theme-medblue-lighter: #578fef;
    --theme-medblue-darker: #1458cc;
    --theme-brightblue: #008dff;
    --theme-brightblue-rgb: 0, 141, 255;
    --theme-brightblue-lighter: #33a4ff;
    --theme-brightblue-darker: #0071cc;
    --theme-purple: #6a0dd4;
    --theme-purple-rgb: 106, 13, 212;
    --theme-purple-lighter: #8323f1;
    --theme-purple-darker: #520aa4;
    --theme-teal: #00a5b2;
    --theme-teal-rgb: 0, 165, 178;
    --theme-teal-lighter: #00d4e5;
    --theme-teal-darker: #00767f;
    --theme-green: #0ad88f;
    --theme-green-rgb: 10, 216, 143;
    --theme-green-lighter: #20f5a9;
    --theme-green-darker: #08a76f;
    --theme-yellow: #fec846;
    --theme-yellow-rgb: 254, 200, 70;
    --theme-yellow-lighter: #fed779;
    --theme-yellow-darker: #feb913;
    --theme-light-gray: #f2f2f2;
    --theme-light-gray-rgb: 242, 242, 242;
    --theme-light-gray-lighter: #fff;
    --theme-light-gray-darker: #d9d9d9;
    --theme-section-bg-gray: #f2f2f2;
    --theme-section-bg-gray-rgb: 242, 242, 242;
    --theme-section-bg-gray-lighter: #fff;
    --theme-section-bg-gray-darker: #d9d9d9;
    --theme-section-bg-lightblue: #f0f8ff;
    --theme-section-bg-lightblue-rgb: 240, 248, 255;
    --theme-section-bg-lightblue-lighter: #fff;
    --theme-section-bg-lightblue-darker: #bde0ff;
    --theme-section-bg-lightgrad: linear-gradient(103deg, #f5f6ff 10%, #dff4fb);
    --theme-em-gradient: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2);
    --theme-new-tag-bg: #fec846;
    --theme-new-tag-bg-rgb: 254, 200, 70;
    --theme-new-tag-bg-lighter: #fed779;
    --theme-new-tag-bg-darker: #feb913;
    --theme-new-tag-fg: #000;
    --theme-new-tag-fg-rgb: 0, 0, 0;
    --theme-new-tag-fg-lighter: #1a1a1a;
    --theme-new-tag-fg-darker: #000;
    --theme-dark-bg: #2a2828;
    --theme-dark-bg-rgb: 42, 40, 40;
    --theme-dark-bg-lighter: #444141;
    --theme-dark-bg-darker: #100f0f;
    --theme-light-bg: #fff;
    --theme-light-bg-rgb: 255, 255, 255;
    --theme-light-bg-lighter: #fff;
    --theme-light-bg-darker: #e6e6e6;
    --theme-light-fg: #080808;
    --theme-light-fg-rgb: 8, 8, 8;
    --theme-light-fg-lighter: #222;
    --theme-light-fg-darker: #000;
    --theme-dark-fg: #fff;
    --theme-dark-fg-rgb: 255, 255, 255;
    --theme-dark-fg-lighter: #fff;
    --theme-dark-fg-darker: #e6e6e6;
    --theme-overlay: rgba(88, 88, 88, 0.4);
    --theme-overlay-rgb: 88, 88, 88;
    --theme-overlay-lighter: hsla(0, 0%, 45%, 0.4);
    --theme-overlay-darker: rgba(63, 63, 63, 0.4);
}

.fluent--dark {
    --theme-page-bg: #2a2828;
    --theme-page-bg-rgb: 42, 40, 40;
    --theme-page-bg-lighter: #444141;
    --theme-page-bg-darker: #100f0f;
    --theme-page-fg: #fff;
    --theme-page-fg-rgb: 255, 255, 255;
    --theme-page-fg-lighter: #fff;
    --theme-page-fg-darker: #e6e6e6;
    --theme-link: #82ddfd;
    --theme-link-rgb: 130, 221, 253;
    --theme-link-lighter: #b4ebfe;
    --theme-link-darker: #50cffc;
    --theme-link-hover: #ba99ff;
    --theme-link-hover-rgb: 186, 153, 255;
    --theme-link-hover-lighter: #dcf;
    --theme-link-hover-darker: #9866ff;
    --theme-link-active: #abd8ff;
    --theme-link-active-rgb: 171, 216, 255;
    --theme-link-active-lighter: #def0ff;
    --theme-link-active-darker: #78c0ff;
    --theme-button-bg: #fff;
    --theme-button-bg-rgb: 255, 255, 255;
    --theme-button-bg-lighter: #fff;
    --theme-button-bg-darker: #e6e6e6;
    --theme-button-bg-hover: #d9f9fb;
    --theme-button-bg-hover-rgb: 217, 249, 251;
    --theme-button-bg-hover-lighter: #fff;
    --theme-button-bg-hover-darker: #abf2f6;
    --theme-button-bg-active: #abd8ff;
    --theme-button-bg-active-rgb: 171, 216, 255;
    --theme-button-bg-active-lighter: #def0ff;
    --theme-button-bg-active-darker: #78c0ff;
    --theme-button-fg: #14192e;
    --theme-button-fg-rgb: 20, 25, 46;
    --theme-button-fg-lighter: #232c52;
    --theme-button-fg-darker: #05060a;
    --theme-blue: #82ddfd;
    --theme-blue-rgb: 130, 221, 253;
    --theme-blue-lighter: #b4ebfe;
    --theme-blue-darker: #50cffc;
    --theme-medblue: #2970ea;
    --theme-medblue-rgb: 41, 112, 234;
    --theme-medblue-lighter: #578fef;
    --theme-medblue-darker: #1458cc;
    --theme-brightblue: #008dff;
    --theme-brightblue-rgb: 0, 141, 255;
    --theme-brightblue-lighter: #33a4ff;
    --theme-brightblue-darker: #0071cc;
    --theme-purple: #ba99ff;
    --theme-purple-rgb: 186, 153, 255;
    --theme-purple-lighter: #dcf;
    --theme-purple-darker: #9866ff;
    --theme-teal: #8bfaeb;
    --theme-teal-rgb: 139, 250, 235;
    --theme-teal-lighter: #bcfcf3;
    --theme-teal-darker: #5af8e3;
    --theme-green: #90ffbd;
    --theme-green-rgb: 144, 255, 189;
    --theme-green-lighter: #c3ffdb;
    --theme-green-darker: #5dff9f;
    --theme-yellow: #fec846;
    --theme-yellow-rgb: 254, 200, 70;
    --theme-yellow-lighter: #fed779;
    --theme-yellow-darker: #feb913;
    --theme-light-gray: #1a1a1a;
    --theme-light-gray-rgb: 26, 26, 26;
    --theme-light-gray-lighter: #343434;
    --theme-light-gray-darker: #010101;
    --theme-section-bg-gray: #1a1a1a;
    --theme-section-bg-gray-rgb: 26, 26, 26;
    --theme-section-bg-gray-lighter: #343434;
    --theme-section-bg-gray-darker: #010101;
    --theme-section-bg-lightblue: #f0f8ff;
    --theme-section-bg-lightblue-rgb: 240, 248, 255;
    --theme-section-bg-lightblue-lighter: #fff;
    --theme-section-bg-lightblue-darker: #bde0ff;
    --theme-section-bg-lightgrad: #1a1a1a;
    --theme-section-bg-lightgrad-rgb: 26, 26, 26;
    --theme-section-bg-lightgrad-lighter: #343434;
    --theme-section-bg-lightgrad-darker: #010101;
    --theme-em-gradient: linear-gradient(90deg, #ba99ff, #abd8ff 50%, #8bfaeb);
    --theme-new-tag-bg: #fec846;
    --theme-new-tag-bg-rgb: 254, 200, 70;
    --theme-new-tag-bg-lighter: #fed779;
    --theme-new-tag-bg-darker: #feb913;
    --theme-new-tag-fg: #000;
    --theme-new-tag-fg-rgb: 0, 0, 0;
    --theme-new-tag-fg-lighter: #1a1a1a;
    --theme-new-tag-fg-darker: #000;
    --theme-dark-bg: #2a2828;
    --theme-dark-bg-rgb: 42, 40, 40;
    --theme-dark-bg-lighter: #444141;
    --theme-dark-bg-darker: #100f0f;
    --theme-light-bg: #fff;
    --theme-light-bg-rgb: 255, 255, 255;
    --theme-light-bg-lighter: #fff;
    --theme-light-bg-darker: #e6e6e6;
    --theme-light-fg: #2a2828;
    --theme-light-fg-rgb: 42, 40, 40;
    --theme-light-fg-lighter: #444141;
    --theme-light-fg-darker: #100f0f;
    --theme-dark-fg: #fff;
    --theme-dark-fg-rgb: 255, 255, 255;
    --theme-dark-fg-lighter: #fff;
    --theme-dark-fg-darker: #e6e6e6;
    --theme-overlay: rgba(8, 8, 8, 0.4);
    --theme-overlay-rgb: 8, 8, 8;
    --theme-overlay-lighter: rgba(34, 34, 34, 0.4);
    --theme-overlay-darker: rgba(0, 0, 0, 0.4);
}


.block-page-banner+.block-container:nth-child(2) {
    margin-top: 0;
}

.fluent,
.fluent--light,
body {
    --theme-page-bg: #e20c0c;
    --theme-page-bg-rgb: 255, 255, 255;
    --theme-page-bg-lighter: #fff;
    --theme-page-bg-darker: #e6e6e6;
    --theme-page-fg: #1a1a1a;
    --theme-page-fg-rgb: 26, 26, 26;
    --theme-page-fg-lighter: #343434;
    --theme-page-fg-darker: #010101;
    --theme-link: #1a59c8;
    --theme-link-rgb: 26, 89, 200;
    --theme-link-lighter: #3172e4;
    --theme-link-darker: #14459b;
    --theme-link-hover: #6a0dd4;
    --theme-link-hover-rgb: 106, 13, 212;
    --theme-link-hover-lighter: #8323f1;
    --theme-link-hover-darker: #520aa4;
    --theme-link-active: #14459b;
    --theme-link-active-rgb: 20, 69, 155;
    --theme-link-active-lighter: #1a59c8;
    --theme-link-active-darker: #0e316e;
    --theme-button-bg: #1a1a1a;
    --theme-button-bg-rgb: 26, 26, 26;
    --theme-button-bg-lighter: #343434;
    --theme-button-bg-darker: #010101;
    --theme-button-bg-hover: #14459b;
    --theme-button-bg-hover-rgb: 20, 69, 155;
    --theme-button-bg-hover-lighter: #1a59c8;
    --theme-button-bg-hover-darker: #0e316e;
    --theme-button-bg-active: #000;
    --theme-button-bg-active-rgb: 0, 0, 0;
    --theme-button-bg-active-lighter: #1a1a1a;
    --theme-button-bg-active-darker: #000;
    --theme-button-fg: #fff;
    --theme-button-fg-rgb: 255, 255, 255;
    --theme-button-fg-lighter: #fff;
    --theme-button-fg-darker: #e6e6e6;
    --theme-blue: #1a59c8;
    --theme-blue-rgb: 26, 89, 200;
    --theme-blue-lighter: #3172e4;
    --theme-blue-darker: #14459b;
    --theme-medblue: #2970ea;
    --theme-medblue-rgb: 41, 112, 234;
    --theme-medblue-lighter: #578fef;
    --theme-medblue-darker: #1458cc;
    --theme-brightblue: #008dff;
    --theme-brightblue-rgb: 0, 141, 255;
    --theme-brightblue-lighter: #33a4ff;
    --theme-brightblue-darker: #0071cc;
    --theme-purple: #6a0dd4;
    --theme-purple-rgb: 106, 13, 212;
    --theme-purple-lighter: #8323f1;
    --theme-purple-darker: #520aa4;
    --theme-teal: #00a5b2;
    --theme-teal-rgb: 0, 165, 178;
    --theme-teal-lighter: #00d4e5;
    --theme-teal-darker: #00767f;
    --theme-green: #0ad88f;
    --theme-green-rgb: 10, 216, 143;
    --theme-green-lighter: #20f5a9;
    --theme-green-darker: #08a76f;
    --theme-yellow: #fec846;
    --theme-yellow-rgb: 254, 200, 70;
    --theme-yellow-lighter: #fed779;
    --theme-yellow-darker: #feb913;
    --theme-light-gray: #f2f2f2;
    --theme-light-gray-rgb: 242, 242, 242;
    --theme-light-gray-lighter: #fff;
    --theme-light-gray-darker: #d9d9d9;
    --theme-section-bg-gray: #f2f2f2;
    --theme-section-bg-gray-rgb: 242, 242, 242;
    --theme-section-bg-gray-lighter: #fff;
    --theme-section-bg-gray-darker: #d9d9d9;
    --theme-section-bg-lightblue: #f0f8ff;
    --theme-section-bg-lightblue-rgb: 240, 248, 255;
    --theme-section-bg-lightblue-lighter: #fff;
    --theme-section-bg-lightblue-darker: #bde0ff;
    --theme-section-bg-lightgrad: linear-gradient(103deg, #f5f6ff 10%, #dff4fb);
    --theme-em-gradient: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2);
    --theme-new-tag-bg: #fec846;
    --theme-new-tag-bg-rgb: 254, 200, 70;
    --theme-new-tag-bg-lighter: #fed779;
    --theme-new-tag-bg-darker: #feb913;
    --theme-new-tag-fg: #000;
    --theme-new-tag-fg-rgb: 0, 0, 0;
    --theme-new-tag-fg-lighter: #1a1a1a;
    --theme-new-tag-fg-darker: #000;
    --theme-dark-bg: #2a2828;
    --theme-dark-bg-rgb: 42, 40, 40;
    --theme-dark-bg-lighter: #444141;
    --theme-dark-bg-darker: #100f0f;
    --theme-light-bg: #fff;
    --theme-light-bg-rgb: 255, 255, 255;
    --theme-light-bg-lighter: #fff;
    --theme-light-bg-darker: #e6e6e6;
    --theme-light-fg: #080808;
    --theme-light-fg-rgb: 8, 8, 8;
    --theme-light-fg-lighter: #222;
    --theme-light-fg-darker: #000;
    --theme-dark-fg: #fff;
    --theme-dark-fg-rgb: 255, 255, 255;
    --theme-dark-fg-lighter: #fff;
    --theme-dark-fg-darker: #e6e6e6;
    --theme-overlay: rgba(88, 88, 88, 0.4);
    --theme-overlay-rgb: 88, 88, 88;
    --theme-overlay-lighter: hsla(0, 0%, 45%, 0.4);
    --theme-overlay-darker: rgba(63, 63, 63, 0.4);
}

.fluent--dark {
    --theme-page-bg: #2a2828;
    --theme-page-bg-rgb: 42, 40, 40;
    --theme-page-bg-lighter: #444141;
    --theme-page-bg-darker: #100f0f;
    --theme-page-fg: #fff;
    --theme-page-fg-rgb: 255, 255, 255;
    --theme-page-fg-lighter: #fff;
    --theme-page-fg-darker: #e6e6e6;
    --theme-link: #82ddfd;
    --theme-link-rgb: 130, 221, 253;
    --theme-link-lighter: #b4ebfe;
    --theme-link-darker: #50cffc;
    --theme-link-hover: #ba99ff;
    --theme-link-hover-rgb: 186, 153, 255;
    --theme-link-hover-lighter: #dcf;
    --theme-link-hover-darker: #9866ff;
    --theme-link-active: #abd8ff;
    --theme-link-active-rgb: 171, 216, 255;
    --theme-link-active-lighter: #def0ff;
    --theme-link-active-darker: #78c0ff;
    --theme-button-bg: #fff;
    --theme-button-bg-rgb: 255, 255, 255;
    --theme-button-bg-lighter: #fff;
    --theme-button-bg-darker: #e6e6e6;
    --theme-button-bg-hover: #d9f9fb;
    --theme-button-bg-hover-rgb: 217, 249, 251;
    --theme-button-bg-hover-lighter: #fff;
    --theme-button-bg-hover-darker: #abf2f6;
    --theme-button-bg-active: #abd8ff;
    --theme-button-bg-active-rgb: 171, 216, 255;
    --theme-button-bg-active-lighter: #def0ff;
    --theme-button-bg-active-darker: #78c0ff;
    --theme-button-fg: #14192e;
    --theme-button-fg-rgb: 20, 25, 46;
    --theme-button-fg-lighter: #232c52;
    --theme-button-fg-darker: #05060a;
    --theme-blue: #82ddfd;
    --theme-blue-rgb: 130, 221, 253;
    --theme-blue-lighter: #b4ebfe;
    --theme-blue-darker: #50cffc;
    --theme-medblue: #2970ea;
    --theme-medblue-rgb: 41, 112, 234;
    --theme-medblue-lighter: #578fef;
    --theme-medblue-darker: #1458cc;
    --theme-brightblue: #008dff;
    --theme-brightblue-rgb: 0, 141, 255;
    --theme-brightblue-lighter: #33a4ff;
    --theme-brightblue-darker: #0071cc;
    --theme-purple: #ba99ff;
    --theme-purple-rgb: 186, 153, 255;
    --theme-purple-lighter: #dcf;
    --theme-purple-darker: #9866ff;
    --theme-teal: #8bfaeb;
    --theme-teal-rgb: 139, 250, 235;
    --theme-teal-lighter: #bcfcf3;
    --theme-teal-darker: #5af8e3;
    --theme-green: #90ffbd;
    --theme-green-rgb: 144, 255, 189;
    --theme-green-lighter: #c3ffdb;
    --theme-green-darker: #5dff9f;
    --theme-yellow: #fec846;
    --theme-yellow-rgb: 254, 200, 70;
    --theme-yellow-lighter: #fed779;
    --theme-yellow-darker: #feb913;
    --theme-light-gray: #1a1a1a;
    --theme-light-gray-rgb: 26, 26, 26;
    --theme-light-gray-lighter: #343434;
    --theme-light-gray-darker: #010101;
    --theme-section-bg-gray: #1a1a1a;
    --theme-section-bg-gray-rgb: 26, 26, 26;
    --theme-section-bg-gray-lighter: #343434;
    --theme-section-bg-gray-darker: #010101;
    --theme-section-bg-lightblue: #f0f8ff;
    --theme-section-bg-lightblue-rgb: 240, 248, 255;
    --theme-section-bg-lightblue-lighter: #fff;
    --theme-section-bg-lightblue-darker: #bde0ff;
    --theme-section-bg-lightgrad: #1a1a1a;
    --theme-section-bg-lightgrad-rgb: 26, 26, 26;
    --theme-section-bg-lightgrad-lighter: #343434;
    --theme-section-bg-lightgrad-darker: #010101;
    --theme-em-gradient: linear-gradient(90deg, #ba99ff, #abd8ff 50%, #8bfaeb);
    --theme-new-tag-bg: #fec846;
    --theme-new-tag-bg-rgb: 254, 200, 70;
    --theme-new-tag-bg-lighter: #fed779;
    --theme-new-tag-bg-darker: #feb913;
    --theme-new-tag-fg: #000;
    --theme-new-tag-fg-rgb: 0, 0, 0;
    --theme-new-tag-fg-lighter: #1a1a1a;
    --theme-new-tag-fg-darker: #000;
    --theme-dark-bg: #2a2828;
    --theme-dark-bg-rgb: 42, 40, 40;
    --theme-dark-bg-lighter: #444141;
    --theme-dark-bg-darker: #100f0f;
    --theme-light-bg: #fff;
    --theme-light-bg-rgb: 255, 255, 255;
    --theme-light-bg-lighter: #fff;
    --theme-light-bg-darker: #e6e6e6;
    --theme-light-fg: #2a2828;
    --theme-light-fg-rgb: 42, 40, 40;
    --theme-light-fg-lighter: #444141;
    --theme-light-fg-darker: #100f0f;
    --theme-dark-fg: #fff;
    --theme-dark-fg-rgb: 255, 255, 255;
    --theme-dark-fg-lighter: #fff;
    --theme-dark-fg-darker: #e6e6e6;
    --theme-overlay: rgba(8, 8, 8, 0.4);
    --theme-overlay-rgb: 8, 8, 8;
    --theme-overlay-lighter: rgba(34, 34, 34, 0.4);
    --theme-overlay-darker: rgba(0, 0, 0, 0.4);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    line-height: normal;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

button,
h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-size: inherit;
    padding: 0;
}


.h1 {
    font-family: segoe-vf, sans-serif;
    font-size: max(32px, min(3.6842105263vw, 56px));
    font-weight: 400;
    letter-spacing: -0.0125em;
    line-height: 1;
}

.h5,
.sh1 {
    font-size: max(19px, min(1.5789473684vw, 24px));
}

.sh1,
.sh2 {
    font-family: segoe-vf, sans-serif;
    font-weight: 400;
    line-height: 1.35;
}

body,
html {
    scroll-behavior: smooth;
}

.fluent-layout {
    --is-mobile: false;
}

@media screen and (max-width: 860px) {
    .fluent-layout {
        --is-mobile: true;
    }
}

.fluent-layout__body--gray {
    background-color: var(--theme-section-bg-gray);
}

.fluent-layout__body--zoomed-out .container:not(.common-nav__menu) {
    max-width: 1840px;
    transform: scale(0.75);
    transform-origin: top;
}

.fluent-layout__body--zoomed-out .features-page {
    transform: scale(0.75);
    transform-origin: top;
}

.fluent-layout__body--zoomed-out .features-page .block-container__container,
.fluent-layout__body--zoomed-out .features-page .feature__faq,
.fluent-layout__body--zoomed-out .features-page .feature__tips {
    max-width: 1840px;
}


.tip-card-dialog__modal .fluent,
.tip-card-dialog__modal .fluent--light,
.tip-card-dialog__modal body {
    --theme-page-bg: #fff;
    --theme-page-bg-rgb: 255, 255, 255;
    --theme-page-bg-lighter: #fff;
    --theme-page-bg-darker: #e6e6e6;
    --theme-page-fg: #1a1a1a;
    --theme-page-fg-rgb: 26, 26, 26;
    --theme-page-fg-lighter: #343434;
    --theme-page-fg-darker: #010101;
    --theme-link: #1a59c8;
    --theme-link-rgb: 26, 89, 200;
    --theme-link-lighter: #3172e4;
    --theme-link-darker: #14459b;
    --theme-link-hover: #6a0dd4;
    --theme-link-hover-rgb: 106, 13, 212;
    --theme-link-hover-lighter: #8323f1;
    --theme-link-hover-darker: #520aa4;
    --theme-link-active: #14459b;
    --theme-link-active-rgb: 20, 69, 155;
    --theme-link-active-lighter: #1a59c8;
    --theme-link-active-darker: #0e316e;
    --theme-button-bg: #1a1a1a;
    --theme-button-bg-rgb: 26, 26, 26;
    --theme-button-bg-lighter: #343434;
    --theme-button-bg-darker: #010101;
    --theme-button-bg-hover: #14459b;
    --theme-button-bg-hover-rgb: 20, 69, 155;
    --theme-button-bg-hover-lighter: #1a59c8;
    --theme-button-bg-hover-darker: #0e316e;
    --theme-button-bg-active: #000;
    --theme-button-bg-active-rgb: 0, 0, 0;
    --theme-button-bg-active-lighter: #1a1a1a;
    --theme-button-bg-active-darker: #000;
    --theme-button-fg: #fff;
    --theme-button-fg-rgb: 255, 255, 255;
    --theme-button-fg-lighter: #fff;
    --theme-button-fg-darker: #e6e6e6;
    --theme-blue: #1a59c8;
    --theme-blue-rgb: 26, 89, 200;
    --theme-blue-lighter: #3172e4;
    --theme-blue-darker: #14459b;
    --theme-medblue: #2970ea;
    --theme-medblue-rgb: 41, 112, 234;
    --theme-medblue-lighter: #578fef;
    --theme-medblue-darker: #1458cc;
    --theme-brightblue: #008dff;
    --theme-brightblue-rgb: 0, 141, 255;
    --theme-brightblue-lighter: #33a4ff;
    --theme-brightblue-darker: #0071cc;
    --theme-purple: #6a0dd4;
    --theme-purple-rgb: 106, 13, 212;
    --theme-purple-lighter: #8323f1;
    --theme-purple-darker: #520aa4;
    --theme-teal: #00a5b2;
    --theme-teal-rgb: 0, 165, 178;
    --theme-teal-lighter: #00d4e5;
    --theme-teal-darker: #00767f;
    --theme-green: #0ad88f;
    --theme-green-rgb: 10, 216, 143;
    --theme-green-lighter: #20f5a9;
    --theme-green-darker: #08a76f;
    --theme-yellow: #fec846;
    --theme-yellow-rgb: 254, 200, 70;
    --theme-yellow-lighter: #fed779;
    --theme-yellow-darker: #feb913;
    --theme-light-gray: #f2f2f2;
    --theme-light-gray-rgb: 242, 242, 242;
    --theme-light-gray-lighter: #fff;
    --theme-light-gray-darker: #d9d9d9;
    --theme-section-bg-gray: #f2f2f2;
    --theme-section-bg-gray-rgb: 242, 242, 242;
    --theme-section-bg-gray-lighter: #fff;
    --theme-section-bg-gray-darker: #d9d9d9;
    --theme-section-bg-lightblue: #f0f8ff;
    --theme-section-bg-lightblue-rgb: 240, 248, 255;
    --theme-section-bg-lightblue-lighter: #fff;
    --theme-section-bg-lightblue-darker: #bde0ff;
    --theme-section-bg-lightgrad: linear-gradient(103deg, #f5f6ff 10%, #dff4fb);
    --theme-em-gradient: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2);
    --theme-new-tag-bg: #fec846;
    --theme-new-tag-bg-rgb: 254, 200, 70;
    --theme-new-tag-bg-lighter: #fed779;
    --theme-new-tag-bg-darker: #feb913;
    --theme-new-tag-fg: #000;
    --theme-new-tag-fg-rgb: 0, 0, 0;
    --theme-new-tag-fg-lighter: #1a1a1a;
    --theme-new-tag-fg-darker: #000;
    --theme-dark-bg: #2a2828;
    --theme-dark-bg-rgb: 42, 40, 40;
    --theme-dark-bg-lighter: #444141;
    --theme-dark-bg-darker: #100f0f;
    --theme-light-bg: #fff;
    --theme-light-bg-rgb: 255, 255, 255;
    --theme-light-bg-lighter: #fff;
    --theme-light-bg-darker: #e6e6e6;
    --theme-light-fg: #080808;
    --theme-light-fg-rgb: 8, 8, 8;
    --theme-light-fg-lighter: #222;
    --theme-light-fg-darker: #000;
    --theme-dark-fg: #fff;
    --theme-dark-fg-rgb: 255, 255, 255;
    --theme-dark-fg-lighter: #fff;
    --theme-dark-fg-darker: #e6e6e6;
    --theme-overlay: rgba(88, 88, 88, 0.4);
    --theme-overlay-rgb: 88, 88, 88;
    --theme-overlay-lighter: hsla(0, 0%, 45%, 0.4);
    --theme-overlay-darker: rgba(63, 63, 63, 0.4);
}

.tip-card-dialog__modal .fluent--dark {
    --theme-page-bg: #2a2828;
    --theme-page-bg-rgb: 42, 40, 40;
    --theme-page-bg-lighter: #444141;
    --theme-page-bg-darker: #100f0f;
    --theme-page-fg: #fff;
    --theme-page-fg-rgb: 255, 255, 255;
    --theme-page-fg-lighter: #fff;
    --theme-page-fg-darker: #e6e6e6;
    --theme-link: #82ddfd;
    --theme-link-rgb: 130, 221, 253;
    --theme-link-lighter: #b4ebfe;
    --theme-link-darker: #50cffc;
    --theme-link-hover: #ba99ff;
    --theme-link-hover-rgb: 186, 153, 255;
    --theme-link-hover-lighter: #dcf;
    --theme-link-hover-darker: #9866ff;
    --theme-link-active: #abd8ff;
    --theme-link-active-rgb: 171, 216, 255;
    --theme-link-active-lighter: #def0ff;
    --theme-link-active-darker: #78c0ff;
    --theme-button-bg: #fff;
    --theme-button-bg-rgb: 255, 255, 255;
    --theme-button-bg-lighter: #fff;
    --theme-button-bg-darker: #e6e6e6;
    --theme-button-bg-hover: #d9f9fb;
    --theme-button-bg-hover-rgb: 217, 249, 251;
    --theme-button-bg-hover-lighter: #fff;
    --theme-button-bg-hover-darker: #abf2f6;
    --theme-button-bg-active: #abd8ff;
    --theme-button-bg-active-rgb: 171, 216, 255;
    --theme-button-bg-active-lighter: #def0ff;
    --theme-button-bg-active-darker: #78c0ff;
    --theme-button-fg: #14192e;
    --theme-button-fg-rgb: 20, 25, 46;
    --theme-button-fg-lighter: #232c52;
    --theme-button-fg-darker: #05060a;
    --theme-blue: #82ddfd;
    --theme-blue-rgb: 130, 221, 253;
    --theme-blue-lighter: #b4ebfe;
    --theme-blue-darker: #50cffc;
    --theme-medblue: #2970ea;
    --theme-medblue-rgb: 41, 112, 234;
    --theme-medblue-lighter: #578fef;
    --theme-medblue-darker: #1458cc;
    --theme-brightblue: #008dff;
    --theme-brightblue-rgb: 0, 141, 255;
    --theme-brightblue-lighter: #33a4ff;
    --theme-brightblue-darker: #0071cc;
    --theme-purple: #ba99ff;
    --theme-purple-rgb: 186, 153, 255;
    --theme-purple-lighter: #dcf;
    --theme-purple-darker: #9866ff;
    --theme-teal: #8bfaeb;
    --theme-teal-rgb: 139, 250, 235;
    --theme-teal-lighter: #bcfcf3;
    --theme-teal-darker: #5af8e3;
    --theme-green: #90ffbd;
    --theme-green-rgb: 144, 255, 189;
    --theme-green-lighter: #c3ffdb;
    --theme-green-darker: #5dff9f;
    --theme-yellow: #fec846;
    --theme-yellow-rgb: 254, 200, 70;
    --theme-yellow-lighter: #fed779;
    --theme-yellow-darker: #feb913;
    --theme-light-gray: #1a1a1a;
    --theme-light-gray-rgb: 26, 26, 26;
    --theme-light-gray-lighter: #343434;
    --theme-light-gray-darker: #010101;
    --theme-section-bg-gray: #1a1a1a;
    --theme-section-bg-gray-rgb: 26, 26, 26;
    --theme-section-bg-gray-lighter: #343434;
    --theme-section-bg-gray-darker: #010101;
    --theme-section-bg-lightblue: #f0f8ff;
    --theme-section-bg-lightblue-rgb: 240, 248, 255;
    --theme-section-bg-lightblue-lighter: #fff;
    --theme-section-bg-lightblue-darker: #bde0ff;
    --theme-section-bg-lightgrad: #1a1a1a;
    --theme-section-bg-lightgrad-rgb: 26, 26, 26;
    --theme-section-bg-lightgrad-lighter: #343434;
    --theme-section-bg-lightgrad-darker: #010101;
    --theme-em-gradient: linear-gradient(90deg, #ba99ff, #abd8ff 50%, #8bfaeb);
    --theme-new-tag-bg: #fec846;
    --theme-new-tag-bg-rgb: 254, 200, 70;
    --theme-new-tag-bg-lighter: #fed779;
    --theme-new-tag-bg-darker: #feb913;
    --theme-new-tag-fg: #000;
    --theme-new-tag-fg-rgb: 0, 0, 0;
    --theme-new-tag-fg-lighter: #1a1a1a;
    --theme-new-tag-fg-darker: #000;
    --theme-dark-bg: #2a2828;
    --theme-dark-bg-rgb: 42, 40, 40;
    --theme-dark-bg-lighter: #444141;
    --theme-dark-bg-darker: #100f0f;
    --theme-light-bg: #fff;
    --theme-light-bg-rgb: 255, 255, 255;
    --theme-light-bg-lighter: #fff;
    --theme-light-bg-darker: #e6e6e6;
    --theme-light-fg: #2a2828;
    --theme-light-fg-rgb: 42, 40, 40;
    --theme-light-fg-lighter: #444141;
    --theme-light-fg-darker: #100f0f;
    --theme-dark-fg: #fff;
    --theme-dark-fg-rgb: 255, 255, 255;
    --theme-dark-fg-lighter: #fff;
    --theme-dark-fg-darker: #e6e6e6;
    --theme-overlay: rgba(8, 8, 8, 0.4);
    --theme-overlay-rgb: 8, 8, 8;
    --theme-overlay-lighter: rgba(34, 34, 34, 0.4);
    --theme-overlay-darker: rgba(0, 0, 0, 0.4);
}


.block-container {
    color: var(--theme-page-fg);
    position: relative;
}

@media screen and (max-width: 860px) {
    .block-container {
        margin: 0;
    }
}

.block-container__container {
    display: grid;
    margin: 0 auto;
    max-width: 1380px;
    padding: 0 min(5vw, 40px);
    position: relative;
    width: 100%;
}

@media screen and (max-width: 860px) {
    .block-container__container {
        padding-left: 24px;
        padding-right: 24px;
    }
}

.block-container__content {
    position: relative;
}

.block-container--has-inner-background>.block-container__container>.block-container__content {
    padding: 0 4em;
}

@media screen and (max-width: 860px) {
    .block-container--has-inner-background>.block-container__container>.block-container__content {
        padding: 0 2em;
    }
}

.block-container--reduced-radius .block-container__background--inner {
    border-radius: 0.825em;
}

.block-container--reduced-padding.block-container--has-inner-background .block-container__content {
    padding: 0 2em;
}

.block-container--hero-full {
    min-height: calc(100vh - 3em);
}

.block-rss-feed__card-list .block-card-list-card__heading .common-heading__title {
    font-size: max(17px, min(1.3157894737vw, 20px));
    line-height: 1.3;
}

.block-slider__heading {
    margin-left: auto;
    margin-right: auto;
    max-width: 60em;
}

.block-slider__inner-block>.block-container__container>.block-container__background--inner {
    left: 0;
    right: 0;
}


button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none transparent;
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-spacing: 0;
    color: inherit;
    display: block;
    font-family: inherit;
    height: auto;
    line-height: 1;
    outline: none;
    text-align: left;
    text-indent: 0;
    width: auto
}

*,
:after,
:before {
    box-sizing: border-box
}


:after,
:before {
    text-decoration: inherit;
    vertical-align: inherit
}

.pillar__overview--layout-centered-bold {
    grid-gap: 5em;
    display: grid;
    gap: 3em;
    grid-template-areas: "heading" "media";
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    padding-top: 2em
}

.pillar__overview--layout-centered-bold .common-heading {
    max-width: 100%
}

.pillar__overview--layout-centered-bold .common-heading__description {
    max-width: 50em
}

.pillar__overview--layout-centered-bold .pillar__title {
    font-size: max(40px, min(4.7368421053vw, 72px));
    font-weight: 600
}

.pillar__highlights-heading {
    margin-bottom: 6em
}

@media screen and (max-width: 860px) {
    .pillar__highlights-heading {
        margin-bottom: 3em
    }
}

.pillar__highlights {
    margin-bottom: 12em;
    padding: 0;
    position: relative
}

@media screen and (max-width: 860px) {
    .pillar__highlights {
        margin-bottom: 6em
    }
}

.pillar__all-features-heading {
    margin-bottom: 6em
}

@media screen and (max-width: 860px) {
    .pillar__all-features-heading {
        margin-bottom: 3em
    }
}

.pillar__media {
    grid-area: media
}

.pillar__features {
    grid-area: features;
    margin: 2em auto 1em;
    width: 100%
}

.pillar__heading {
    align-self: center;
    display: flex;
    flex: none;
    flex-direction: column;
    gap: 2em;
    grid-area: heading
}

.px-icon,
.px-svg {
    color: inherit;
    display: inline-block;
    line-height: 1
}

.pillar__actions {
    display: flex;
    flex: none;
    flex-wrap: wrap;
    font-size: max(17px, min(1.3157894737vw, 20px));
    gap: .5em;
    grid-area: actions;
    margin-top: .5em
}

/* .feature__related-heading {
    font-family: segoe-vf,sans-serif;
    font-size: max(24px,min(2.2368421053vw,34px));
    font-weight: 400;
    letter-spacing: -.0125em;
    line-height: 1.15;
    margin: 0 auto 2em;
    text-align: center;
    text-align: left
} */

/* .pillar__overview {
    grid-gap: min(5vw,40px) 3em;
    display: grid;
    gap: min(5vw,40px) 3em;
    grid-template-areas: ". media" "heading media" ". media" "features features";
    grid-template-columns: 5fr 7fr;
    grid-template-rows: .4fr auto .6fr auto
} */

/* @media screen and (max-width: 1024px) {
    .pillar__overview {
        display:grid;
        grid-template-areas: "media" "heading" "features";
        grid-template-columns: 100%;
        grid-template-rows: auto auto auto
    }
} */


.common-heading__description strong {
    font-weight: 600
}

.common-heading__description li,
.common-heading__description ol,
.common-heading__description p,
.common-heading__description ul {
    line-height: 1.33
}

.common-heading__description ol:not(:last-child),
.common-heading__description p:not(:last-child),
.common-heading__description ul:not(:last-child) {
    margin-bottom: .75em
}

.common-heading__description li:not(:last-child) {
    margin-bottom: .375em
}

.common-heading__description p {
    padding: 0
}

.common-heading__description p:first-child {
    margin-top: 0 !important
}

.common-heading__description p:last-child {
    margin-bottom: 0 !important
}

.common-heading__description a {
    color: var(--theme-link)
}

.common-heading__description a:hover {
    color: var(--theme-link-hover);
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: var(--theme-link-hover)
}

.common-heading__description a:active {
    color: var(--theme-link-active);
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: var(--theme-link-active)
}

.common-heading__description ol,
.common-heading__description ul {
    list-style: disc none outside;
    padding: 0 0 0 1em
}

.common-heading__description ol li,
.common-heading__description ul li {
    line-height: inherit;
    padding-left: .5em
}

.common-heading__description ul {
    list-style: disc none outside
}

.common-heading__description ol {
    list-style: decimal none outside
}

.common-heading--gradients .common-heading__title em {
    -webkit-background-clip: text;
    background-clip: text;
    background-image: var(--theme-em-gradient);
    color: transparent;
    display: inline;
    font-style: normal !important;
    font-weight: inherit !important
}

.common-heading__description {
    margin: 0 auto
}

.common-heading__description a {
    -webkit-text-decoration: underline;
    text-decoration: underline
}

.common-heading__description a:hover {
    color: var(--theme-link)
}

.pillar__overview--layout-centered-bold .common-heading__description {
    max-width: 50em
}


.media-item-video__video {
    height: 100%;
    width: 100%
}


.media-item-video__video {
    height: 100%;
    width: 100%
}
</style>


<script>
export default {
    mounted() {
        // This code will only run on the client side after the component is mounted to the DOM
        const videoElement = document.querySelector('.media-item-video__video');
        const playButton = document.querySelector('.media-item-video__button');

        playButton.addEventListener('click', function () {
            videoElement.play();
            playButton.style.display = 'none';
        });

        videoElement.addEventListener('ended', function () {
            playButton.style.display = 'block';
        });
    }
}
</script>
