# NodeBB: Points

Additional metrics for User Profiles. It's like experience in video games. Plugin is good for gamification of your board.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
 

- [Ranking Calculation](#ranking-calculation)
- [Themes](#themes)
- [TODO](#todo)
- [Changelog](#changelog)
  - [v1.1.0 - 10.05.2015](#v110---10052015)
  - [v1.0.0 - 26.04.2015](#v100---26042015)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Ranking Calculation

Ranking calculator is a function, that should accept 2 parameters - settings and raw points.
Settings could vary from one calculator to another. Calculator must return object with properties listed below:

- rank [Number] - user rank, level
- rankProgress [Number] - amount of points on current level
- rankTotal [Number] - amount of points needed to level-up
- total [Number] - raw amount of points

## Themes

Plugin populates both: `Profile` and `Topic` views. Search for `points` property in corresponding entities. If you want points in Profile, do very basic changes to your theme:

> Example: Vanilla Theme, `/account/profile.tpl`, edit template in package directory - `node_modules`

```html
<div class="text-center account-stats">

    <div class="inline-block text-center">
        <span class="human-readable-number" title="{reputation}">{reputation}</span>
        <span class="account-bio-label">[[global:reputation]]</span>
    </div>

    <div class="inline-block text-center">
        <span class="human-readable-number" title="{postcount}">{postcount}</span>
        <span class="account-bio-label">[[global:posts]]</span>
    </div>

    <div class="inline-block text-center">
        <span class="human-readable-number" title="{profileviews}">{profileviews}</span>
        <span class="account-bio-label">[[user:profile_views]]</span>
    </div>

    <!-- IF points -->
    <div class="inline-block text-center">
        <span class="human-readable-number" title="{points}">{points}</span>
        <span class="account-bio-label">Points</span>
    </div>
    <!-- ENDIF points -->
    
</div>
```

## TODO

- Add Gifts: ability to add points through ACP with a notification
- Add Transfers: user can transfer some of his points as a reward for some bounty or help or user generated competition
- Add Points Grid: multipliers or raw values for different categories
- Add Fresh Points: provide information for points that are earned today
- Add Complexity to Point calculation: encourage tags in topic creation
- Add Stuggering animation to overview page
- Add Custom ranking calculators
- Add ACP Panel for raw point rewards
- Add API for raw point rewards
- Add Custom Notifications for levels
- Add Presets for ranking calculation
- Add Sections to Overview page: all time, today, personal.
- Add Utility for initial point calculation
- Add Tests (Mocha/Tape)

## Changelog

### v1.2.0 - 10.05.2015

- Use Posts filter

### v1.1.0 - 10.05.2015

- Rank calculation moved to client-side

### v1.0.0 - 26.04.2015

- Very first release
