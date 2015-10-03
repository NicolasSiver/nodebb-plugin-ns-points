<div class="media" data-points="{points}">
    <div class="avatar pull-left">
        <a href="{relative_path}/user/{userslug}"><img src="{picture}" class="img-thumbnail"/></a>
        <span class="rank">{rank}</span>
    </div>
    <div class="stats media-body">
        <div class="user-info">
            <a href="{relative_path}/user/{userslug}">{username}</a>
            <br/>
            <small class="numbers">Points: {points}</small>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar"
                 aria-valuenow="0"
                 aria-valuemin="0"
                 aria-valuemax="100" style="width:0">
            </div>
        </div>
        <div class="rank-progress">{rankProgress}</div>
    </div>
</div>