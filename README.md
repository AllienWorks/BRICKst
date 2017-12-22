# BRICKst

Say hi to yet another (S)CSS framework. BRICKst is (heavily) inspired by ZURB's Foundation, takes the best of its code and philosophy, applies it in minimal fashion and some little tweaks, which I found useful.

BRICKst is constantly in development, however slow the progress may be. I'm gradually building smaller projects on it and therefore adding missing features in the meantime.

All code tweaks, little hacks and stuff are appreciated (e.g. in case you find some unfitting solutions).

Homepage & demo in preparation, not available at the moment ([index.html] itself serves as a demo for now).


## Installation & Usage

Download or clone this repo, all the files you need are located in ```dist/``` folder. Copy them over to your project and start building your app with BRICKst.

`index.html` and other files in root folder are for demo/docs purposes, you can refer to `index.html` anytime you need help. Dedicated website with proper docs will come when BRICKst is somehow ready for production.

## Development

1. copy the `dist/` folder to your project
2. `npm install` to fetch dependencies
3. `gulp watch` for development compilations
4. `gulp build` for one-time compilation

## Todo/Features

* SCSS
    * [ ] Table of Contents
    * [x] Split BRICKst into separate _partials (?)
* GRID
    * [x] medium grid
    * [x] small grid
    * [ ] offsets
    * [x] centering
    * [ ] nestable (needs fixing)
    * [x] block grid
    * [x] responsive block grid
* Typography etc.
    * [ ] better typography (with vertical rhytm and aligned baselines) – [inspiration](https://sassline.com)
    * [ ] nested ```ol``` lists with proper numbering
* Forms
    * [x] inputs, textareas, ...
    * [ ] focus for buttons
    * [ ] input errors/alerts
    * [ ] sample Form code for Docs
* Addons
    * [ ] basic styles for column highlighting (after grid customization) for easier creation of "guide grid" in Photoshop
* JS (?)
    * [ ] column equalizer – http://css-tricks.com/equal-height-blocks-in-rows/ OR https://github.com/liabru/jquery-match-height
    * [ ] basic tabs
    * [ ] accordion


## BRICKst in the Wild

Some of the sites I know about that are using BRICKst:

* [allienworks.net](https://allienworks.net) & [allien.work](https://allien.work) – of course I build my sites with it ;)
* [TAJP](https://github.com/vincurekf/TAJP) – Angular/JS/PHP starter template by Filip Vincůrek
* [Cryptocoins](http://labs.allienworks.net/icons/cryptocoins/) – microsite featuring my [cryptocurrency icon pack](https://github.com/allienworks/cryptocoins)


## Author

BRICKst, *your web app's first brick*, was built by **Martin Allien** (and many contributors to ZURB's Foundation, in a sense).

* Website: [allien.work](https://allien.work)
* Keybase: [martin_allien](https://keybase.io/martin_allien)

[Tip me crypto](https://allien.work/donate) and **support further development**!

Follow for updates and more stuff:

* Twitter: [@AllienWorks](https://twitter.com/AllienWorks)


## Licence

Released under [MIT Licence](http://opensource.org/licenses/MIT) | Copyright © 2016 Martin Allien
