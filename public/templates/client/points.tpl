<div class="points-container">
    <!-- BEGIN users -->
    <div class="row">
        <div class="col-md-2">
            <a href="{relative_path}/user/{users.userslug}"><img src="{users.picture}" class="img-thumbnail"/></a>
        </div>
        <div class="col-md-10">
            <div class="user-info">
                <a href="{relative_path}/user/{users.userslug}">{users.username}</a> ({users.rank}), Points: {users.points}
            </div>
            <div class="progress">
                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="{users.progress}"
                     aria-valuemin="0"
                     aria-valuemax="100" style="width: {users.progress}%">
                </div>
            </div>
            <div class="rank-progress">
                {users.progressMessage}
            </div>
        </div>
    </div>
    <!-- END users -->
</div>