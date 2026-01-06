def solo_to_text(solo: dict) -> str:
    skills = ", ".join(solo.get("skills", []))
    interested_in = solo.get("interestedIn", "")
    bio = solo.get("bio", "")
    solo_type = solo.get("type", "solo")

    text = f"""
    This is a {solo_type} profile.
    Skills include {skills}.
    Interested in {interested_in}.
    Bio: {bio}.
    """

    return text.strip()

def team_to_text(team: dict) -> str:
    skills = ", ".join(team.get("skills", []))
    interested_in = team.get("interestedIn", "")
    bio = team.get("bio", "")
    team_type = team.get("type", "team")

    text = f"""
    This is a {team_type} profile.
    Team skills include {skills}.
    The team is interested in {interested_in}.
    Bio: {bio}.
    """

    return text.strip()


