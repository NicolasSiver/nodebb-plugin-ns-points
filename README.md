# NodeBB: Points

Additional metrics for User Profiles. It's like experience in video games. Plugin is good for gamification of your board.

<!-- START doctoc -->
<!-- END doctoc -->

## Themes

Plugin populates both: `Profile` and `Topic` views. Search for `points` property in corresponding entities. If you want points in Profile, do very basic changes to your theme:

Example: Vanilla Theme, `/account/profile.tpl`
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
- Add Presets for ranking calculation
- Add Sections to Overview page: all time, today, personal.
- Add Utility for initial point calculation
