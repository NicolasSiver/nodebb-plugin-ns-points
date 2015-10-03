<div class="points-user" data-points="{points}">
    <div class="points-avatar">
        <a href="{relative_path}/user/{userslug}"><img src="{picture}" class="img-thumbnail"/></a>
        <span class="rank">{rank}</span>
    </div>
    <div class="points-stats">
        <div class="points-user-info">
            <a class="points-user-name" href="{relative_path}/user/{userslug}">{username}</a>
            <small class="points-numbers">Points: {points}</small>
            <small class="rank-progress">Progress: {rankProgress}</small>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar"
                 aria-valuenow="{progress}"
                 aria-valuemin="0"
                 aria-valuemax="100" style="width:{progress}%">
            </div>
        </div>
    </div>
</div>