<div class="" data-points="{points}">
    <div class="avatar pull-left">
        <a href="{relative_path}/user/{userslug}"><img src="{picture}" class="img-thumbnail"/></a>
        <span class="rank">{rank}</span>
    </div>
    <div class="points-stats">
        <div class="user-info">
            <a class="points-user-name" href="{relative_path}/user/{userslug}">{username}</a>
            <br/>
            <small class="points-numbers">Points: {points}</small>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar"
                 aria-valuenow="{progress}"
                 aria-valuemin="0"
                 aria-valuemax="100" style="width:{progress}%">
            </div>
        </div>
        <div class="rank-progress">{rankProgress}</div>
    </div>
</div>